import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionCourseComponent } from './introduction-course.component';

describe('IntroductionCourseComponent', () => {
  let component: IntroductionCourseComponent;
  let fixture: ComponentFixture<IntroductionCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionCourseComponent]
    });
    fixture = TestBed.createComponent(IntroductionCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
