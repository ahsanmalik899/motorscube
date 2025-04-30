import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryShowroomListingPage } from './machinery-showroom-listing.page';

describe('MachineryShowroomListingPage', () => {
  let component: MachineryShowroomListingPage;
  let fixture: ComponentFixture<MachineryShowroomListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryShowroomListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
