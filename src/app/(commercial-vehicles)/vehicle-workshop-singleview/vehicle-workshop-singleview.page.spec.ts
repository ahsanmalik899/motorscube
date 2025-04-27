import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleWorkshopSingleviewPage } from './vehicle-workshop-singleview.page';

describe('VehicleWorkshopSingleviewPage', () => {
  let component: VehicleWorkshopSingleviewPage;
  let fixture: ComponentFixture<VehicleWorkshopSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleWorkshopSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
