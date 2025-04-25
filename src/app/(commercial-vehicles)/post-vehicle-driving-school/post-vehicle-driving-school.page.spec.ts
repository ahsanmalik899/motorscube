import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleDrivingSchoolPage } from './post-vehicle-driving-school.page';

describe('PostVehicleDrivingSchoolPage', () => {
  let component: PostVehicleDrivingSchoolPage;
  let fixture: ComponentFixture<PostVehicleDrivingSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleDrivingSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
