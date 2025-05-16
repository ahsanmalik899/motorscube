import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantImporterPage } from './update-plant-importer.page';

describe('UpdatePlantImporterPage', () => {
  let component: UpdatePlantImporterPage;
  let fixture: ComponentFixture<UpdatePlantImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
