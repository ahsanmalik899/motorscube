import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryInsuranceListingPage } from './machinery-insurance-listing.page';

describe('MachineryInsuranceListingPage', () => {
  let component: MachineryInsuranceListingPage;
  let fixture: ComponentFixture<MachineryInsuranceListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryInsuranceListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
