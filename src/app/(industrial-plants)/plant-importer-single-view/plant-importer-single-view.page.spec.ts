import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantImporterSingleViewPage } from './plant-importer-single-view.page';

describe('PlantImporterSingleViewPage', () => {
  let component: PlantImporterSingleViewPage;
  let fixture: ComponentFixture<PlantImporterSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantImporterSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
