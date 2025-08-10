import { Component, OnInit } from '@angular/core';
import { Training } from '../../models/training';
import { ServiceService } from '../../service/service.service';
import { every, TruthyTypesOf } from 'rxjs';
import { TableDetailComponent } from "./table-detail/table-detail.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css'],
  imports: [TableDetailComponent,CommonModule]
})
export class TrainingTableComponent implements OnInit {

  trainings!: Training[];
  page: number = 0;

  constructor(private service: ServiceService) {
   }

  ngOnInit() {
    this.service.getTrainings(this.page).subscribe(data => {
      this.trainings=data;
    })
 }
 handleEnroll($event: any) {
  $event.capacity=$event.capacity-1;
    this.service.updateTraining($event).subscribe({
      error: err => console.error(err)
    });
  }
  handleNext() {
    this.page=this.page+1;
    this.service.getTrainings(this.page).subscribe(data => {
      this.trainings=data;
    })
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
