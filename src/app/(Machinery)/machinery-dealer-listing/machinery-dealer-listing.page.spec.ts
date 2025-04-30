import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryDealerListingPage } from './machinery-dealer-listing.page';

describe('MachineryDealerListingPage', () => {
  let component: MachineryDealerListingPage;
  let fixture: ComponentFixture<MachineryDealerListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryDealerListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
