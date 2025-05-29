import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCommercialVehiclePage } from './add-commercial-vehicle.page';

describe('AddCommercialVehiclePage', () => {
  let component: AddCommercialVehiclePage;
  let fixture: ComponentFixture<AddCommercialVehiclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommercialVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
