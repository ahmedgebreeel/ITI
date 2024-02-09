import { Component, OnInit } from '@angular/core';
import { OneStudentComponent } from '../one-student/one-student.component';
import { MyServiceService } from '../../services/my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [OneStudentComponent,HttpClientModule, RouterModule],
  providers: [MyServiceService],
  templateUrl: './students.component.html',
  styles: ''
})
export class StudentsComponent implements OnInit{
  constructor(private stdService: MyServiceService){}
  students : any;
  ngOnInit(){
    this.stdService.getAllStudents().subscribe({
      next:(data)=>{
        this.students = data;
        // console.log(data);
        
      },
      error:(err)=>{console.log(err);
      }
    })
  }

}
