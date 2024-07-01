import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySectionComponent } from './technology-section.component';

describe('TechnologySectionComponent', () => {
  let component: TechnologySectionComponent;
  let fixture: ComponentFixture<TechnologySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
