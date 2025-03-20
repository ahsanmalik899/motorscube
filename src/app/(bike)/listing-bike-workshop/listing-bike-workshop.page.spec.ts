import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingBikeWorkshopPage } from './listing-bike-workshop.page';

describe('ListingBikeWorkshopPage', () => {
  let component: ListingBikeWorkshopPage;
  let fixture: ComponentFixture<ListingBikeWorkshopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBikeWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
