import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Training } from '../../../models/training';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
  imports: [CommonModule]
})
export class TableDetailComponent implements OnInit {


  @Input()
  trainingDetail!: Training;

  @Output()
  enroll: EventEmitter<any>=new EventEmitter

  constructor() { }

  ngOnInit() {
  }
  handleEnroll() {
    return this.enroll.emit(this.trainingDetail)
  }

}
