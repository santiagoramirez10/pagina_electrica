import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingComponent } from './computing.component';

describe('ComputingComponent', () => {
  let component: ComputingComponent;
  let fixture: ComponentFixture<ComputingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputingComponent]
    });
    fixture = TestBed.createComponent(ComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
