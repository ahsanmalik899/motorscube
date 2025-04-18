import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleShowroomsListingPage } from './vehicle-showrooms-listing.page';

describe('VehicleShowroomsListingPage', () => {
  let component: VehicleShowroomsListingPage;
  let fixture: ComponentFixture<VehicleShowroomsListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShowroomsListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
