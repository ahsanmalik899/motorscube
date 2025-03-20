import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeImporterFilterPage } from './bike-importer-filter.page';

describe('BikeImporterFilterPage', () => {
  let component: BikeImporterFilterPage;
  let fixture: ComponentFixture<BikeImporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeImporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
