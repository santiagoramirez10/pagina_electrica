import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsVariablesComponent } from './operators-variables.component';

describe('OperatorsVariablesComponent', () => {
  let component: OperatorsVariablesComponent;
  let fixture: ComponentFixture<OperatorsVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorsVariablesComponent]
    });
    fixture = TestBed.createComponent(OperatorsVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
