import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclcarouselComponent } from './sclcarousel.component';

describe('SclcarouselComponent', () => {
  let component: SclcarouselComponent;
  let fixture: ComponentFixture<SclcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SclcarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SclcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
