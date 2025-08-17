import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Training } from '../../models/training';
import { ServiceService } from '../../service/service.service';
import { every, max, TruthyTypesOf } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { User } from '../../models/user';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css'],
  imports: [CommonModule, MatTableModule, MatPaginatorModule]
})
export class TrainingTableComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Training>();
  displayColumns: string[] = ['title', 'hour', 'trainer', 'location', 'capacity', 'enroll']
  user!: User;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private service: ServiceService) {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    const storedUser = sessionStorage.getItem("loggedUser")
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }

    this.service.getTrainings().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  handleEnroll($event: Training) {
    if ($event.capacity > 0) {
      $event.capacity = $event.capacity - 1;
      this.service.updateTraining($event).subscribe({
        error: err => console.error(err)
      });
      let reservation = {
        id: 0,
        user: this.user,
        training: $event,
        status: "Pending",
        date: new Date()
      }
      this.service.saveRegistration(reservation).subscribe((v) => console.log(v))
    }
  }

}


