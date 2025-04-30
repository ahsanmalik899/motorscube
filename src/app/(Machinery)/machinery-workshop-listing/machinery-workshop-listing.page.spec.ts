import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryWorkshopListingPage } from './machinery-workshop-listing.page';

describe('MachineryWorkshopListingPage', () => {
  let component: MachineryWorkshopListingPage;
  let fixture: ComponentFixture<MachineryWorkshopListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryWorkshopListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
