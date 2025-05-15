import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantSchoolListingPage } from './plant-school-listing.page';

describe('PlantSchoolListingPage', () => {
  let component: PlantSchoolListingPage;
  let fixture: ComponentFixture<PlantSchoolListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSchoolListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
