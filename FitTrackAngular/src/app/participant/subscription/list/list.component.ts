import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../models/reservation';
import { ServiceService } from '../../../service/service.service';
import { User } from '../../../models/user';
import { SharedService } from '../../../service/shared.service';
import { CommonModule } from '@angular/common';
import { DetailListComponent } from "./detail-list/detail-list.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, DetailListComponent]
})
export class ListComponent implements OnInit {
  
  reservations!: Reservation[];
  user!: User;

  constructor(private service :ServiceService,private sharedService: SharedService) { }

  ngOnInit() {
    this.user=this.sharedService.getUser();
    this.service.getUserRegistrations(this.user.id).subscribe({
      next: (data : Reservation[]) => this.reservations=data,
      error : err=> console.error(err)
    })
  }

}
