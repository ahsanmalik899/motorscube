import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingBikeInsurancePage } from './listing-bike-insurance.page';

describe('ListingBikeInsurancePage', () => {
  let component: ListingBikeInsurancePage;
  let fixture: ComponentFixture<ListingBikeInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBikeInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
