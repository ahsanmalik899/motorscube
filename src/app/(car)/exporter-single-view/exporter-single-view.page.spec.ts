import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExporterSingleViewPage } from './exporter-single-view.page';

describe('ExporterSingleViewPage', () => {
  let component: ExporterSingleViewPage;
  let fixture: ComponentFixture<ExporterSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporterSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
