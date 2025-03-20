import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingBikeDealerPage } from './listing-bike-dealer.page';

describe('ListingBikeDealerPage', () => {
  let component: ListingBikeDealerPage;
  let fixture: ComponentFixture<ListingBikeDealerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBikeDealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
