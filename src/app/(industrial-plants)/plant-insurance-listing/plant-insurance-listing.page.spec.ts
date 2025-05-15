import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantInsuranceListingPage } from './plant-insurance-listing.page';

describe('PlantInsuranceListingPage', () => {
  let component: PlantInsuranceListingPage;
  let fixture: ComponentFixture<PlantInsuranceListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInsuranceListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
