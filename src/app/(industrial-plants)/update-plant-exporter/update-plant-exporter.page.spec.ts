import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantExporterPage } from './update-plant-exporter.page';

describe('UpdatePlantExporterPage', () => {
  let component: UpdatePlantExporterPage;
  let fixture: ComponentFixture<UpdatePlantExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
