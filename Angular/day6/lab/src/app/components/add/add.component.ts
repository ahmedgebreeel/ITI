import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers: [MyServiceService],
  templateUrl: './add.component.html',
  styles: ``
})
export class AddComponent {
  constructor(private client : MyServiceService){

  }

  add(name:any,age:any,email:any){
    this.client.addStudent({name, age, email}).subscribe();
  }
}
