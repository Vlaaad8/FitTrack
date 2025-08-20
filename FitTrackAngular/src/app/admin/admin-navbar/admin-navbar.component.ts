import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
  imports: [MatToolbarModule]
})
export class AdminNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogOut() {
    sessionStorage.removeItem('loggedUser')
    this.router.navigate([''])
}
handleHome() {
    this.router.navigate(['admin']);
}
handleStats(){
  this.router.navigate(['stats'])
}

}
