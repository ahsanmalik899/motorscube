import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantDealerListingPage } from './plant-dealer-listing.page';

describe('PlantDealerListingPage', () => {
  let component: PlantDealerListingPage;
  let fixture: ComponentFixture<PlantDealerListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDealerListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
