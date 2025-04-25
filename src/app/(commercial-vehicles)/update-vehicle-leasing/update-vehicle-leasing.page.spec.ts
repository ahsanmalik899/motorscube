import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleLeasingPage } from './update-vehicle-leasing.page';

describe('UpdateVehicleLeasingPage', () => {
  let component: UpdateVehicleLeasingPage;
  let fixture: ComponentFixture<UpdateVehicleLeasingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleLeasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
