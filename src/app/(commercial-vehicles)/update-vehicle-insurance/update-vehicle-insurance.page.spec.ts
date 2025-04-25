import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleInsurancePage } from './update-vehicle-insurance.page';

describe('UpdateVehicleInsurancePage', () => {
  let component: UpdateVehicleInsurancePage;
  let fixture: ComponentFixture<UpdateVehicleInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
