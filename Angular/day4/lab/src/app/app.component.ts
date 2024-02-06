import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students:{name:string, age:number}[] = [];
  getData(s:{name:string, age:number}){
    // console.log(s);
    this.students.push(s);
    // console.log(this.students);
    
  }
}
