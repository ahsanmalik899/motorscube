import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantWorkshopListingPage } from './plant-workshop-listing.page';

describe('PlantWorkshopListingPage', () => {
  let component: PlantWorkshopListingPage;
  let fixture: ComponentFixture<PlantWorkshopListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantWorkshopListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
