import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleExporterFilterPage } from './vehicle-exporter-filter.page';

describe('VehicleExporterFilterPage', () => {
  let component: VehicleExporterFilterPage;
  let fixture: ComponentFixture<VehicleExporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleExporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
