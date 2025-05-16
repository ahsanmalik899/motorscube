import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantImporterFilterPage } from './plant-importer-filter.page';

describe('PlantImporterFilterPage', () => {
  let component: PlantImporterFilterPage;
  let fixture: ComponentFixture<PlantImporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantImporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
