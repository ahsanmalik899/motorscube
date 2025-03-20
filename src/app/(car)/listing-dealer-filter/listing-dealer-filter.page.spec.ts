import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingDealerFilterPage } from './listing-dealer-filter.page';

describe('ListingDealerFilterPage', () => {
  let component: ListingDealerFilterPage;
  let fixture: ComponentFixture<ListingDealerFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDealerFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
