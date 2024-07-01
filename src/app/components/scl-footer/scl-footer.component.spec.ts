import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclFooterComponent } from './scl-footer.component';

describe('SclFooterComponent', () => {
  let component: SclFooterComponent;
  let fixture: ComponentFixture<SclFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SclFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SclFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
