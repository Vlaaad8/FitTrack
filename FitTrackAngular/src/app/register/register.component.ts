import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule,CommonModule]
})
export class RegisterComponent implements OnInit {
handleSubmit() {
  console.log(this.registerForm.value)
  if(this.registerForm.valid){
  this.service.register(this.registerForm.value).subscribe({
    next: (v) => console.log(v),
    error: (err)=> console.log(err)
  })
  this.router.navigate([''])
}

}
registerForm!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder,private service: ServiceService,private router: Router) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      username: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
      password: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      role: ['Client']
    })
  }

}
