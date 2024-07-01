import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclVisionComponent } from './scl-vision.component';

describe('SclVisionComponent', () => {
  let component: SclVisionComponent;
  let fixture: ComponentFixture<SclVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SclVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SclVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
