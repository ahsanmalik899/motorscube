import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantSaleListingPage } from './plant-sale-listing.page';

describe('PlantSaleListingPage', () => {
  let component: PlantSaleListingPage;
  let fixture: ComponentFixture<PlantSaleListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSaleListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
