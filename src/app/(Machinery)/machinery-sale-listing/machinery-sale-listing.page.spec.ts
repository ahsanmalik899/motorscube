import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachinerySaleListingPage } from './machinery-sale-listing.page';

describe('MachinerySaleListingPage', () => {
  let component: MachinerySaleListingPage;
  let fixture: ComponentFixture<MachinerySaleListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinerySaleListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
