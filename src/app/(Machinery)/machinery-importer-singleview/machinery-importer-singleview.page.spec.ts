import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryImporterSingleviewPage } from './machinery-importer-singleview.page';

describe('MachineryImporterSingleviewPage', () => {
  let component: MachineryImporterSingleviewPage;
  let fixture: ComponentFixture<MachineryImporterSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryImporterSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
