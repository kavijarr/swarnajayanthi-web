import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStreamsComponent } from './subject-streams.component';

describe('SubjectStreamsComponent', () => {
  let component: SubjectStreamsComponent;
  let fixture: ComponentFixture<SubjectStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectStreamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
