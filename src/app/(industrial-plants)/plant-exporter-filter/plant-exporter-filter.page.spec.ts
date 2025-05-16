import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantExporterFilterPage } from './plant-exporter-filter.page';

describe('PlantExporterFilterPage', () => {
  let component: PlantExporterFilterPage;
  let fixture: ComponentFixture<PlantExporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantExporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
