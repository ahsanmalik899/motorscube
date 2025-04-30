import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryInsuranceFilterPage } from './machinery-insurance-filter.page';

describe('MachineryInsuranceFilterPage', () => {
  let component: MachineryInsuranceFilterPage;
  let fixture: ComponentFixture<MachineryInsuranceFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryInsuranceFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
