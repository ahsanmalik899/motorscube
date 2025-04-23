import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleHirePage } from './update-vehicle-hire.page';

describe('UpdateVehicleHirePage', () => {
  let component: UpdateVehicleHirePage;
  let fixture: ComponentFixture<UpdateVehicleHirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleHirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
