import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'app-sclcarousel',
  standalone: true,
  imports: [ThemeDirective, CarouselComponent, CarouselInnerComponent, NgFor, CarouselItemComponent],
  templateUrl: './sclcarousel.component.html',
  styleUrls: ['./sclcarousel.component.css']
})
export class SclcarouselComponent implements OnInit {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/carosal1.jpg'
    };
    this.slides[1] = {
      src: './assets/carosal2.jpg'
    };
    this.slides[2] = {
      src: './assets/carosal3.jpg'
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
