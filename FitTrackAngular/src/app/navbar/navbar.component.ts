import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  user!: User

  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleHome() {
  this.router.navigate(['participant']);
  
  }

  handleSubscription() {
  this.router.navigate(['subscription'])
  }

  handleLogOut(){
    this.router.navigate([''])
  }
}
