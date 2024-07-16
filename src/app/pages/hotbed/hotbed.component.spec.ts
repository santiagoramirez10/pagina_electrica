import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotbedComponent } from './hotbed.component';

describe('HotbedComponent', () => {
  let component: HotbedComponent;
  let fixture: ComponentFixture<HotbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotbedComponent]
    });
    fixture = TestBed.createComponent(HotbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
