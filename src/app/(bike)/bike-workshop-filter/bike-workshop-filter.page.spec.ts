import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeWorkshopFilterPage } from './bike-workshop-filter.page';

describe('BikeWorkshopFilterPage', () => {
  let component: BikeWorkshopFilterPage;
  let fixture: ComponentFixture<BikeWorkshopFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeWorkshopFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
