import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = "";
  age = "";
   @Output() myEvent = new EventEmitter();
  add(){
    if(this.name.length >= 3 && (+this.age) >= 20 && (+this.age) <=30){

      let student = {name:this.name, age:this.age}
      this.myEvent.emit(student);
      // console.log(student);
    }
  }
}
function output(): (target: RegisterComponent, propertyKey: "myEvent") => void {
  throw new Error('Function not implemented.');
}

