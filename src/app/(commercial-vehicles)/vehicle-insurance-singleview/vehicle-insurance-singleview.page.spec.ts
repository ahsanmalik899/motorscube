import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleInsuranceSingleviewPage } from './vehicle-insurance-singleview.page';

describe('VehicleInsuranceSingleviewPage', () => {
  let component: VehicleInsuranceSingleviewPage;
  let fixture: ComponentFixture<VehicleInsuranceSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInsuranceSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
