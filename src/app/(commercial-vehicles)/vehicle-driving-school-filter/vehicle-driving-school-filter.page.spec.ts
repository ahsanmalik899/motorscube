import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDrivingSchoolFilterPage } from './vehicle-driving-school-filter.page';

describe('VehicleDrivingSchoolFilterPage', () => {
  let component: VehicleDrivingSchoolFilterPage;
  let fixture: ComponentFixture<VehicleDrivingSchoolFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDrivingSchoolFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
