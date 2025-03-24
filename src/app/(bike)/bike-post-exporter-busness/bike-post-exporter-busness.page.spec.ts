import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostExporterBusnessPage } from './bike-post-exporter-busness.page';

describe('BikePostExporterBusnessPage', () => {
  let component: BikePostExporterBusnessPage;
  let fixture: ComponentFixture<BikePostExporterBusnessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostExporterBusnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
