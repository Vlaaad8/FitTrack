import { Component, OnInit } from '@angular/core';
import { Training } from '../../models/training';
import { ServiceService } from '../../service/service.service';
import { TruthyTypesOf } from 'rxjs';
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

  constructor(private service: ServiceService) {
   }

  ngOnInit() {
    this.service.getTrainings().subscribe(data => {
      this.trainings=data;
    })
 }

}
