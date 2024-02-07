import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formValidation = new FormGroup({
    name : new FormControl("name",[Validators.required,Validators.minLength(3)]),
    age : new FormControl(25, [Validators.required,Validators.max(50),Validators.min(20)]),
    address : new FormControl("address",[Validators.required,Validators.maxLength(100)])
  })

  submit(){
    console.log("name is " + this.formValidation.controls.name.status);
    console.log("age is " + this.formValidation.controls.age.status);
    console.log("address is " + this.formValidation.controls.address.status);
    if(this.formValidation.valid){
      alert("Success");
    }else{
      alert("Invalid Data");
    }
  }

  get nameValid(){
    return this.formValidation.controls.name.valid;
  }
  get ageValid(){
    return this.formValidation.controls.age.valid;
  }
  get addressValid(){
    return this.formValidation.controls.address.valid;
  }
}
