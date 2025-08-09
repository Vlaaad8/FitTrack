import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
