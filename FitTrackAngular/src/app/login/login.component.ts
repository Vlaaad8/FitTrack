import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { User } from '../models/user';

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
    let loggedUser: User;
    if (this.loginForm.valid) {
      this.serviceClient.login(authentification).subscribe({
        next: (v) => {
          console.log(v);
          if (v?.role == 'Admin') {
            this.router.navigate(['/admin'])
          }
          else if (v?.role == 'Trainer') {
            this.router.navigate(['/trainer'])
          }
          else if (v?.role == 'Participant') {
            this.router.navigate(['/participant'])
          }
        },
        error: (err) => console.error(err)
      })
    }
  }

  handleRegister() {
    this.router.navigate(['/register'])
  }

  constructor(private formBuilder: FormBuilder, private serviceClient: ServiceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    })
  }

}
