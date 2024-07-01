import { Component, Renderer2, ElementRef} from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  scrollToComponent(componentId: string) {
    const element = this.el.nativeElement.ownerDocument.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
