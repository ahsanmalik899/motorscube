import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingWorkshopFilterPage } from './listing-workshop-filter.page';

describe('ListingWorkshopFilterPage', () => {
  let component: ListingWorkshopFilterPage;
  let fixture: ComponentFixture<ListingWorkshopFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingWorkshopFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
