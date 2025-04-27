import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleImporterSingleviewPage } from './vehicle-importer-singleview.page';

describe('VehicleImporterSingleviewPage', () => {
  let component: VehicleImporterSingleviewPage;
  let fixture: ComponentFixture<VehicleImporterSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleImporterSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
