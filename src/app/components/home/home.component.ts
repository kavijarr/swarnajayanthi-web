import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SclcarouselComponent } from '../sclcarousel/sclcarousel.component';
import { SubjectStreamsComponent } from '../subject-streams/subject-streams.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SclcarouselComponent,SubjectStreamsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
