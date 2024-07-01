import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../app.routes';
import { OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-technology-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './technology-section.component.html',
  styleUrl: './technology-section.component.css'
})
export class TechnologySectionComponent {
  ngOnInit() {
    AOS.init({
      duration: 700 // Duration in milliseconds
    });
  }
}
