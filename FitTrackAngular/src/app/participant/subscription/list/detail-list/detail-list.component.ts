import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../../../../models/reservation';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css'],
  imports: [NgClass]
})
export class DetailListComponent implements OnInit {

  @Input()
  reservation!: Reservation

  constructor() { }

  ngOnInit() {
  }

}
