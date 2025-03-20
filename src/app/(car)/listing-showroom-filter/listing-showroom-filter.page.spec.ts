import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingShowroomFilterPage } from './listing-showroom-filter.page';

describe('ListingShowroomFilterPage', () => {
  let component: ListingShowroomFilterPage;
  let fixture: ComponentFixture<ListingShowroomFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingShowroomFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
