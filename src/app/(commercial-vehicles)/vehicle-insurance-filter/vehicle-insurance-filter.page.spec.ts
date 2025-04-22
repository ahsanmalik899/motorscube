import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleInsuranceFilterPage } from './vehicle-insurance-filter.page';

describe('VehicleInsuranceFilterPage', () => {
  let component: VehicleInsuranceFilterPage;
  let fixture: ComponentFixture<VehicleInsuranceFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInsuranceFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
