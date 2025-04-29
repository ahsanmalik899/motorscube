import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryHireListingPage } from './machinery-hire-listing.page';

describe('MachineryHireListingPage', () => {
  let component: MachineryHireListingPage;
  let fixture: ComponentFixture<MachineryHireListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryHireListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
