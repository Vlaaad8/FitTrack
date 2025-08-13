import { Component, OnInit } from '@angular/core';
import { Training } from '../../models/training';
import { ServiceService } from '../../service/service.service';
import { every, max, TruthyTypesOf } from 'rxjs';
import { TableDetailComponent } from "./table-detail/table-detail.component";
import { CommonModule } from '@angular/common';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css'],
  imports: [TableDetailComponent,CommonModule]
})
export class TrainingTableComponent implements OnInit {

  trainings!: Training[];
  page: number = 0;
  maxPage!: number

  constructor(private service: ServiceService,private sharedService: SharedService) {
   }

  ngOnInit() {
    this.service.getTrainings(this.page).subscribe(data => {
      this.trainings=data;
    })
    this.service.getNumberOfPages().subscribe({
      next: (data) => this.maxPage=data,
      error: err => console.error(err)
    })
 }
 handleEnroll($event: any) {
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
  handleNext() {
    if(this.page<this.maxPage-1){
    this.page=this.page+1;
    this.service.getTrainings(this.page).subscribe(data => {
      this.trainings=data;
    })
  }
  }
handlePrevious() {
    if(this.page>0){
      this.page=this.page-1;
    this.service.getTrainings(this.page).subscribe(data => {
      this.trainings=data;
    })
  }
}


}
