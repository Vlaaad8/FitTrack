import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { ClassStatsComponent } from "../class-stats/class-stats.component";
import { UserStatsComponent } from "../user-stats/user-stats.component";
import { AdminUserRoleStatComponent } from "../admin-user-role-stat/admin-user-role-stat.component";
import { AdminClassOcopyComponent } from "../admin-class-ocopy/admin-class-ocopy.component";

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css'],
  imports: [AdminNavbarComponent, ClassStatsComponent, UserStatsComponent, AdminUserRoleStatComponent, AdminClassOcopyComponent]
})
export class AdminStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
