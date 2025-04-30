import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryDrivingSchoolListingPage } from './machinery-driving-school-listing.page';

describe('MachineryDrivingSchoolListingPage', () => {
  let component: MachineryDrivingSchoolListingPage;
  let fixture: ComponentFixture<MachineryDrivingSchoolListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryDrivingSchoolListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
