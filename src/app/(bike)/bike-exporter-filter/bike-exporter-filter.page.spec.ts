import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeExporterFilterPage } from './bike-exporter-filter.page';

describe('BikeExporterFilterPage', () => {
  let component: BikeExporterFilterPage;
  let fixture: ComponentFixture<BikeExporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeExporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
