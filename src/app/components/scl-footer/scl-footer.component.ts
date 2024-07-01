import { Component, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'app-scl-footer',
  standalone: true,
  imports: [],
  templateUrl: './scl-footer.component.html',
  styleUrl: './scl-footer.component.css'
})
export class SclFooterComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  scrollToComponent(componentId: string) {
    const element = this.el.nativeElement.ownerDocument.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
