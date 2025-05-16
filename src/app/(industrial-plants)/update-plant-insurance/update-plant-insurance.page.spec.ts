import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantInsurancePage } from './update-plant-insurance.page';

describe('UpdatePlantInsurancePage', () => {
  let component: UpdatePlantInsurancePage;
  let fixture: ComponentFixture<UpdatePlantInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
