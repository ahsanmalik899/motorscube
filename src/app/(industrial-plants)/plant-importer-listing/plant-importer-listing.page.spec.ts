import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantImporterListingPage } from './plant-importer-listing.page';

describe('PlantImporterListingPage', () => {
  let component: PlantImporterListingPage;
  let fixture: ComponentFixture<PlantImporterListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantImporterListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
