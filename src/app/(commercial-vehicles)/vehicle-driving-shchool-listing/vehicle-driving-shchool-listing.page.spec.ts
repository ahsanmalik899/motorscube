import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDrivingShchoolListingPage } from './vehicle-driving-shchool-listing.page';

describe('VehicleDrivingShchoolListingPage', () => {
  let component: VehicleDrivingShchoolListingPage;
  let fixture: ComponentFixture<VehicleDrivingShchoolListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDrivingShchoolListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
