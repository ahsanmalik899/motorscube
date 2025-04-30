import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryLeasingListingPage } from './machinery-leasing-listing.page';

describe('MachineryLeasingListingPage', () => {
  let component: MachineryLeasingListingPage;
  let fixture: ComponentFixture<MachineryLeasingListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryLeasingListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
