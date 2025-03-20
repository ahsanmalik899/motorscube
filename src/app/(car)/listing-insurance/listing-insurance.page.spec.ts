import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingInsurancePage } from './listing-insurance.page';

describe('ListingInsurancePage', () => {
  let component: ListingInsurancePage;
  let fixture: ComponentFixture<ListingInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
