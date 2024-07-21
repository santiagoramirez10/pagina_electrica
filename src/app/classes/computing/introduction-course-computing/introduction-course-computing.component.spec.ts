import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionCourseComputingComponent } from './introduction-course-computing.component';

describe('IntroductionCourseComputingComponent', () => {
  let component: IntroductionCourseComputingComponent;
  let fixture: ComponentFixture<IntroductionCourseComputingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionCourseComputingComponent]
    });
    fixture = TestBed.createComponent(IntroductionCourseComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
