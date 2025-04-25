import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleExporterPage } from './update-vehicle-exporter.page';

describe('UpdateVehicleExporterPage', () => {
  let component: UpdateVehicleExporterPage;
  let fixture: ComponentFixture<UpdateVehicleExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
