import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleSalePage } from './update-vehicle-sale.page';

describe('UpdateVehicleSalePage', () => {
  let component: UpdateVehicleSalePage;
  let fixture: ComponentFixture<UpdateVehicleSalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
