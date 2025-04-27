import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleExporterSingleviewPage } from './vehicle-exporter-singleview.page';

describe('VehicleExporterSingleviewPage', () => {
  let component: VehicleExporterSingleviewPage;
  let fixture: ComponentFixture<VehicleExporterSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleExporterSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
