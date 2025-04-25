import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleWorkshopPage } from './update-vehicle-workshop.page';

describe('UpdateVehicleWorkshopPage', () => {
  let component: UpdateVehicleWorkshopPage;
  let fixture: ComponentFixture<UpdateVehicleWorkshopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
