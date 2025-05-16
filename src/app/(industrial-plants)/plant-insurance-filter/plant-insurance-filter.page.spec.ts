import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantInsuranceFilterPage } from './plant-insurance-filter.page';

describe('PlantInsuranceFilterPage', () => {
  let component: PlantInsuranceFilterPage;
  let fixture: ComponentFixture<PlantInsuranceFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInsuranceFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
