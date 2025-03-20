import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeInsuranceFilterPage } from './bike-insurance-filter.page';

describe('BikeInsuranceFilterPage', () => {
  let component: BikeInsuranceFilterPage;
  let fixture: ComponentFixture<BikeInsuranceFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeInsuranceFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
