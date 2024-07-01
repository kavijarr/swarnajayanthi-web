import { Component,OnInit  } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-scl-vision',
  standalone: true,
  imports: [],
  templateUrl: './scl-vision.component.html',
  styleUrl: './scl-vision.component.css'
})
export class SclVisionComponent {
  ngOnInit() {
    AOS.init({
      duration: 2000 // Duration in milliseconds
    });
  }
}
