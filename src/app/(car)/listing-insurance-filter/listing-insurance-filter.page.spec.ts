import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingInsuranceFilterPage } from './listing-insurance-filter.page';

describe('ListingInsuranceFilterPage', () => {
  let component: ListingInsuranceFilterPage;
  let fixture: ComponentFixture<ListingInsuranceFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInsuranceFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
