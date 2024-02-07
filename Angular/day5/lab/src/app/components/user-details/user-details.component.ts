import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  id = 0 ;
  constructor(myActivate:ActivatedRoute){
    this.id = myActivate.snapshot.params["id"];
  }
}
