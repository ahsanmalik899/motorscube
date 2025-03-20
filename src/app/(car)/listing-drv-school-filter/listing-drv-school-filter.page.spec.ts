import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingDrvSchoolFilterPage } from './listing-drv-school-filter.page';

describe('ListingDrvSchoolFilterPage', () => {
  let component: ListingDrvSchoolFilterPage;
  let fixture: ComponentFixture<ListingDrvSchoolFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDrvSchoolFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
