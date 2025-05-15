import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantExporterListingPage } from './plant-exporter-listing.page';

describe('PlantExporterListingPage', () => {
  let component: PlantExporterListingPage;
  let fixture: ComponentFixture<PlantExporterListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantExporterListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
