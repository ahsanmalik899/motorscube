import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleExportersListingPage } from './vehicle-exporters-listing.page';

describe('VehicleExportersListingPage', () => {
  let component: VehicleExportersListingPage;
  let fixture: ComponentFixture<VehicleExportersListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleExportersListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
