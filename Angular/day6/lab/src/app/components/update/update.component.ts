import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MyServiceService } from '../../services/my-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  providers:[MyServiceService],
  templateUrl: './update.component.html',
  styles: ``
})
export class UpdateComponent implements OnInit {
  id = 0;
  student :any;
  constructor( myActive:ActivatedRoute,private stdService:MyServiceService){
    this.id = myActive.snapshot.params["id"];
  }
  ngOnInit(){
      this.stdService.getStudentById(this.id).subscribe({
        next:(data:any)=>{
          // console.log(data);
          this.student = data;
        }
      })
  }

update(name:any,age:any,email:any){
  // console.log(this.id);
  
  this.stdService.updateStudent(this.id, {name,age,email}).subscribe();
}
del(){
  this.stdService.deleteStudent(this.id).subscribe();
}
}
