import { Component, ElementRef, ViewChild} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SclcarouselComponent } from '../sclcarousel/sclcarousel.component';
import { SclVisionComponent } from '../scl-vision/scl-vision.component';
import { SubjectStreamsComponent } from '../subject-streams/subject-streams.component';
import { SclFooterComponent } from '../scl-footer/scl-footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SclcarouselComponent,SclVisionComponent,SubjectStreamsComponent,SclFooterComponent,GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('subjectStreams') subjectStreams!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;

  scrollToSection(section: keyof HomeComponent) {
    const element = this[section] as ElementRef;
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
