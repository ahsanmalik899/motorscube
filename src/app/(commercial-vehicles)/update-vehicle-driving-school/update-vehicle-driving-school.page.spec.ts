import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleDrivingSchoolPage } from './update-vehicle-driving-school.page';

describe('UpdateVehicleDrivingSchoolPage', () => {
  let component: UpdateVehicleDrivingSchoolPage;
  let fixture: ComponentFixture<UpdateVehicleDrivingSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleDrivingSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
