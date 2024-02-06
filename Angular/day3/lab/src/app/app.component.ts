import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './componentes/binding/binding.component';
import { SlidesComponent } from './componentes/slides/slides.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingComponent, SlidesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
