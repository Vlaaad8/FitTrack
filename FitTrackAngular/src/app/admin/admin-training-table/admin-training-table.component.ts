import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Training } from '../../models/training';
import { ServiceService } from '../../service/service.service';
import { User } from '../../models/user';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-training-table',
  templateUrl: './admin-training-table.component.html',
  styleUrls: ['./admin-training-table.component.css'],
  imports: [CommonModule, MatTableModule, MatPaginatorModule]

})
export class AdminTrainingTableComponent implements OnInit {
    
  @Output()
  modifyTraining = new EventEmitter<Training>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Training>();
  displayColumns: string[] = ['title', 'hour', 'trainer', 'location', 'capacity', 'enroll']
  user!: User;

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

  handleModify(training: Training) {
    this.modifyTraining.emit(training)
  }

  handleRemove(training: Training) {
    this.service.removeTraining(training.id)
    this.dataSource.data = this.dataSource.data.filter(el => el.id != training.id)
  }

}


