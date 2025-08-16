import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription, User } from '../models/user';
import { SharedService } from '../service/shared.service';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, NgIf, NgClass]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup<any>;

  handleSubmit() {
    let values = this.loginForm.value;
    const authentification = {
      "username": values.username,
      "password": values.password
    }
    if (this.loginForm.valid) {
    
        this.serviceClient.login(authentification).pipe(
          tap(user => {this.sharedService.setUser(user)}),
        )
        .subscribe({
          next: (user)=>{

  if (user.role === 'Admin') this.router.navigate(['/admin']);
    else if (user.role === 'Trainer') this.router.navigate(['/trainer']);
    else if (user.role === 'Participant') this.router.navigate(['/participant']);
  },
  error: console.error
});
    }
  }

  handleRegister() {
    this.router.navigate(['/register'])
  }

  constructor(private formBuilder: FormBuilder, private serviceClient: ServiceService, private router: Router,private sharedService: SharedService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    })
  }

}
