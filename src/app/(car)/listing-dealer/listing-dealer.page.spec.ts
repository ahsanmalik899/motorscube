import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingDealerPage } from './listing-dealer.page';

describe('ListingDealerPage', () => {
  let component: ListingDealerPage;
  let fixture: ComponentFixture<ListingDealerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
