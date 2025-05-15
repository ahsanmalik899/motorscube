import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantLeasingListingPage } from './plant-leasing-listing.page';

describe('PlantLeasingListingPage', () => {
  let component: PlantLeasingListingPage;
  let fixture: ComponentFixture<PlantLeasingListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantLeasingListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
