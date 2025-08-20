import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { Training } from '../../models/training';
import { ServiceService } from '../../service/service.service';
import { T } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-modify-training-form',
  templateUrl: './modify-training-form.component.html',
  styleUrls: ['./modify-training-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class ModifyTrainingFormComponent implements OnInit {
modifyForm!: FormGroup<any>;

@Input()
  training!: Training
@Output()
  modifyFinised = new EventEmitter<Training>

  constructor(private formBuilder: FormBuilder,private service: ServiceService) { }

  ngOnInit() {
    this.modifyForm = this.formBuilder.group({
    hour: [this.training?.hour || ''],
    capacity: [this.training?.capacity || ''],
    location: [this.training?.location || ''],
    title: [this.training?.title || ''],
    trainer: [this.training?.trainer || '']
  });
  }

  handleModify() {
    if(this.modifyForm.valid){
    let modifiedTraining = this.modifyForm.value
     let newTraining : Training = {
     id: this.training.id,
     trainer: modifiedTraining.trainer,
     hour: modifiedTraining.hour,
     capacity: modifiedTraining.capacity,
     location: modifiedTraining.location,
     title: modifiedTraining.title
    }
    this.service.updateTraining(newTraining).subscribe((v) => console.log(v));
    this.modifyFinised.emit(this.training)
    this.modifyForm.reset();
  }

}

}
