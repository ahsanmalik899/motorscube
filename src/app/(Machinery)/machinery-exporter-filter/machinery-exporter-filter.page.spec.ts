import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryExporterFilterPage } from './machinery-exporter-filter.page';

describe('MachineryExporterFilterPage', () => {
  let component: MachineryExporterFilterPage;
  let fixture: ComponentFixture<MachineryExporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryExporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
