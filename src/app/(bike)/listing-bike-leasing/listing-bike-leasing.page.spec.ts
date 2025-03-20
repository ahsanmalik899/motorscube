import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingBikeLeasingPage } from './listing-bike-leasing.page';

describe('ListingBikeLeasingPage', () => {
  let component: ListingBikeLeasingPage;
  let fixture: ComponentFixture<ListingBikeLeasingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBikeLeasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
