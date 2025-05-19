import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantExporterSingleViewPage } from './plant-exporter-single-view.page';

describe('PlantExporterSingleViewPage', () => {
  let component: PlantExporterSingleViewPage;
  let fixture: ComponentFixture<PlantExporterSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantExporterSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
