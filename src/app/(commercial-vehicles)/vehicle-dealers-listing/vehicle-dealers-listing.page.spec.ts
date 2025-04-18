import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDealersListingPage } from './vehicle-dealers-listing.page';

describe('VehicleDealersListingPage', () => {
  let component: VehicleDealersListingPage;
  let fixture: ComponentFixture<VehicleDealersListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDealersListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
