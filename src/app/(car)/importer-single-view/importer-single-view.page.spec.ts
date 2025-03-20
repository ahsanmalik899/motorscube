import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImporterSingleViewPage } from './importer-single-view.page';

describe('ImporterSingleViewPage', () => {
  let component: ImporterSingleViewPage;
  let fixture: ComponentFixture<ImporterSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporterSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
