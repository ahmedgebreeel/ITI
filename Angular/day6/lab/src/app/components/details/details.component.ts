import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MyServiceService],
  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent implements OnInit{
  studentId = 0;
  student :any;
  constructor(Actived:ActivatedRoute, private client:MyServiceService){
   this.studentId = Actived.snapshot.params["id"];
  }
  ngOnInit(){
    this.client.getStudentById(this.studentId).subscribe({
      next: (data)=>{
        this.student = data;
        // console.log(data);
        
       },
      error: (err)=>{console.log(err)}
    })
  }

}
