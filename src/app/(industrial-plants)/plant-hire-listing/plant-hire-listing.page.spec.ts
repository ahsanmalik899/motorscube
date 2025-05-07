import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantHireListingPage } from './plant-hire-listing.page';

describe('PlantHireListingPage', () => {
  let component: PlantHireListingPage;
  let fixture: ComponentFixture<PlantHireListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantHireListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
