import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDrivingSchoolSingleviewPage } from './vehicle-driving-school-singleview.page';

describe('VehicleDrivingSchoolSingleviewPage', () => {
  let component: VehicleDrivingSchoolSingleviewPage;
  let fixture: ComponentFixture<VehicleDrivingSchoolSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDrivingSchoolSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
