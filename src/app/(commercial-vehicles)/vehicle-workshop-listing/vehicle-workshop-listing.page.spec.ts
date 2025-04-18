import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleWorkshopListingPage } from './vehicle-workshop-listing.page';

describe('VehicleWorkshopListingPage', () => {
  let component: VehicleWorkshopListingPage;
  let fixture: ComponentFixture<VehicleWorkshopListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleWorkshopListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
