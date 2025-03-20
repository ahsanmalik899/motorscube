import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeSaleListingPage } from './bike-sale-listing.page';

describe('BikeSaleListingPage', () => {
  let component: BikeSaleListingPage;
  let fixture: ComponentFixture<BikeSaleListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeSaleListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
