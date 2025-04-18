import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleLeasingListingPage } from './vehicle-leasing-listing.page';

describe('VehicleLeasingListingPage', () => {
  let component: VehicleLeasingListingPage;
  let fixture: ComponentFixture<VehicleLeasingListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLeasingListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
