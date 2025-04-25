import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleShowroomPage } from './update-vehicle-showroom.page';

describe('UpdateVehicleShowroomPage', () => {
  let component: UpdateVehicleShowroomPage;
  let fixture: ComponentFixture<UpdateVehicleShowroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleShowroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
