import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryImporterFilterPage } from './machinery-importer-filter.page';

describe('MachineryImporterFilterPage', () => {
  let component: MachineryImporterFilterPage;
  let fixture: ComponentFixture<MachineryImporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryImporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
