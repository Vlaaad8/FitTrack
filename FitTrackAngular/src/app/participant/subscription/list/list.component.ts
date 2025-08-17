import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Reservation } from '../../../models/reservation';
import { ServiceService } from '../../../service/service.service';
import { User } from '../../../models/user';
import { SharedService } from '../../../service/shared.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, MatTableModule, MatPaginatorModule]
})
export class ListComponent implements OnInit, AfterViewInit {

  user!: User;

  displayColumns: string[] = ['title', 'trainer', 'date', 'hour', 'status'];
  dataSource = new MatTableDataSource<Reservation>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ServiceService, private sharedService: SharedService) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    const savedUser = sessionStorage.getItem('loggedUser')
    if (savedUser) {
      this.user = JSON.parse(savedUser)
    }

    this.service.getUserRegistrations(this.user.id).subscribe({
      next: (data: Reservation[]) => this.dataSource.data = data,
      error: err => console.error(err)
    })
  }

  formatDate(date: string): string {
    console.log(date)
    return date.split('T')[0];
  }

}
