import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommercialSaleListingPage } from './commercial-sale-listing.page';

describe('CommercialSaleListingPage', () => {
  let component: CommercialSaleListingPage;
  let fixture: ComponentFixture<CommercialSaleListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialSaleListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
