import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommercialHireListingPage } from './commercial-hire-listing.page';

describe('CommercialHireListingPage', () => {
  let component: CommercialHireListingPage;
  let fixture: ComponentFixture<CommercialHireListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialHireListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
