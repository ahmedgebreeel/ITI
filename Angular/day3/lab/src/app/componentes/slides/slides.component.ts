import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [],
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css'
})
export class SlidesComponent {
imgsrc = "assets/images/1.jpg";
images = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg","assets/images/5.jpg"];
i = 0 ;
interval: any;
next(){
  if(this.i < this.images.length-1){
    this.i +=1;
    this.imgsrc = this.images[this.i];
  }
}
previous(){
  if(this.i > 0){
    this.i -=1;
    this.imgsrc = this.images[this.i];
  }
}
slide(){
 
  this.interval = setInterval(()=>{
    if(this.i < this.images.length){
      this.imgsrc = this.images[this.i];
      this.i +=1;
    }else{
      this.i = 0 ;
      this.imgsrc = this.images[this.i];
      this.i +=1;
    }
  },1000);
}
stop(){
  clearInterval(this.interval);
}
}


