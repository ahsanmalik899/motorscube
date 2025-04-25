import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleImporterPage } from './update-vehicle-importer.page';

describe('UpdateVehicleImporterPage', () => {
  let component: UpdateVehicleImporterPage;
  let fixture: ComponentFixture<UpdateVehicleImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
