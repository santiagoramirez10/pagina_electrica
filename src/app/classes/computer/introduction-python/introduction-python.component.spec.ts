import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPythonComponent } from './introduction-python.component';

describe('IntroductionPythonComponent', () => {
  let component: IntroductionPythonComponent;
  let fixture: ComponentFixture<IntroductionPythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionPythonComponent]
    });
    fixture = TestBed.createComponent(IntroductionPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
