import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantInsuranceSingleViewPage } from './plant-insurance-single-view.page';

describe('PlantInsuranceSingleViewPage', () => {
  let component: PlantInsuranceSingleViewPage;
  let fixture: ComponentFixture<PlantInsuranceSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInsuranceSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
