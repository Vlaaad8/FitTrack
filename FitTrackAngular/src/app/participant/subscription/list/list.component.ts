import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Reservation } from '../../../models/reservation';
import { ServiceService } from '../../../service/service.service';
import { User } from '../../../models/user';
import { SharedService } from '../../../service/shared.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, MatTableModule]
})
export class ListComponent implements OnInit{

  user!: User;
  displayColumns: string[] = ['title', 'trainer', 'date', 'hour', 'status'];
  dataSource = new MatTableDataSource<Reservation>();

  constructor(private service: ServiceService, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.getUser();
    this.service.getUserRegistrations(this.user.id).subscribe({
      next: (data: Reservation[]) => this.dataSource.data=data,
      error: err => console.error(err)
    })
  }

}
