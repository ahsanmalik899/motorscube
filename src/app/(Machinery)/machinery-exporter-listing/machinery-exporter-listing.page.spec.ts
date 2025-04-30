import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryExporterListingPage } from './machinery-exporter-listing.page';

describe('MachineryExporterListingPage', () => {
  let component: MachineryExporterListingPage;
  let fixture: ComponentFixture<MachineryExporterListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryExporterListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
