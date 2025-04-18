import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleInsuranceListingPage } from './vehicle-insurance-listing.page';

describe('VehicleInsuranceListingPage', () => {
  let component: VehicleInsuranceListingPage;
  let fixture: ComponentFixture<VehicleInsuranceListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInsuranceListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
