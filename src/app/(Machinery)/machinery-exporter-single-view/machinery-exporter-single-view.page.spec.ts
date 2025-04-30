import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryExporterSingleViewPage } from './machinery-exporter-single-view.page';

describe('MachineryExporterSingleViewPage', () => {
  let component: MachineryExporterSingleViewPage;
  let fixture: ComponentFixture<MachineryExporterSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryExporterSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
