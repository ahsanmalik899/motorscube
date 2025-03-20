import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingLeasingPage } from './listing-leasing.page';

describe('ListingLeasingPage', () => {
  let component: ListingLeasingPage;
  let fixture: ComponentFixture<ListingLeasingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingLeasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
