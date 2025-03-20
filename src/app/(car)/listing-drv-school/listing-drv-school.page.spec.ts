import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingDrvSchoolPage } from './listing-drv-school.page';

describe('ListingDrvSchoolPage', () => {
  let component: ListingDrvSchoolPage;
  let fixture: ComponentFixture<ListingDrvSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDrvSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
