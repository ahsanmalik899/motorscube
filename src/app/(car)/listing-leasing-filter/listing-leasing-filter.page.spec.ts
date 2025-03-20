import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingLeasingFilterPage } from './listing-leasing-filter.page';

describe('ListingLeasingFilterPage', () => {
  let component: ListingLeasingFilterPage;
  let fixture: ComponentFixture<ListingLeasingFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingLeasingFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
