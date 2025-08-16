import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Training } from '../../models/training';
import { ServiceService } from '../../service/service.service';
import { every, max, TruthyTypesOf } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../service/shared.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css'],
  imports: [CommonModule, MatTableModule,MatPaginatorModule]
})
export class TrainingTableComponent implements OnInit,AfterViewInit {

  dataSource = new MatTableDataSource<Training>();
  displayColumns: string[] = ['title','hour','trainer','location','capacity','enroll']

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private service: ServiceService,private sharedService: SharedService) {
   }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
  }

  ngOnInit() {
    this.service.getTrainings().subscribe(data => {
      this.dataSource.data=data;
    })
  }
 
 handleEnroll($event: Training) {
  if($event.capacity>0){
  $event.capacity=$event.capacity-1;
    this.service.updateTraining($event).subscribe({
      error: err => console.error(err)
    });
    let reservation= {id: 0,
      user: this.sharedService.getUser(),
      training: $event,
      status: "Pending",
      date: new Date()
    }
    this.service.saveRegistration(reservation).subscribe((v)=> console.log(v))
  }
}
  
}


