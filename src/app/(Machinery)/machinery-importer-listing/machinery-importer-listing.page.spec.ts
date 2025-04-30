import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryImporterListingPage } from './machinery-importer-listing.page';

describe('MachineryImporterListingPage', () => {
  let component: MachineryImporterListingPage;
  let fixture: ComponentFixture<MachineryImporterListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryImporterListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
