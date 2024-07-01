import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SclcarouselComponent } from '../sclcarousel/sclcarousel.component';
import { SclVisionComponent } from '../scl-vision/scl-vision.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SclcarouselComponent,SclVisionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
