import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleImportersListingPage } from './vehicle-importers-listing.page';

describe('VehicleImportersListingPage', () => {
  let component: VehicleImportersListingPage;
  let fixture: ComponentFixture<VehicleImportersListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleImportersListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
