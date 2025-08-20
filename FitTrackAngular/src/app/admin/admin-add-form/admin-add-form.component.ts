import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Training } from '../../models/training';

@Component({
  selector: 'app-admin-add-form',
  templateUrl: './admin-add-form.component.html',
  styleUrls: ['./admin-add-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class AdminAddFormComponent implements OnInit {
addForm!: FormGroup<any>;

@Input()
  training!: Training
@Output()
  modifyFinised = new EventEmitter<Training>

  constructor(private formBuilder: FormBuilder,private service: ServiceService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
    hour: ['',Validators.required],
    capacity: [ '',Validators.required,Validators.min(1)],
    location: ['',Validators.required],
    title: ['',Validators.required],
    trainer: ['',Validators.required]
  });
  }

  handleAdd() {
    let modifiedTraining = this.addForm.value
     let newTraining : Training = {
     id: 0,
     trainer: modifiedTraining.trainer,
     hour: modifiedTraining.hour,
     capacity: modifiedTraining.capacity,
     location: modifiedTraining.location,
     title: modifiedTraining.title
    }
    if(this.addForm.valid){
    this.service.addTraining(newTraining).subscribe((v) => console.log(v));
    this.addForm.reset();
    }

}

}