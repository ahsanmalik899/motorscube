import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingWorkshopPage } from './listing-workshop.page';

describe('ListingWorkshopPage', () => {
  let component: ListingWorkshopPage;
  let fixture: ComponentFixture<ListingWorkshopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
