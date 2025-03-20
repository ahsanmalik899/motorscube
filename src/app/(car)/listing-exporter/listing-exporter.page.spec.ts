import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingExporterPage } from './listing-exporter.page';

describe('ListingExporterPage', () => {
  let component: ListingExporterPage;
  let fixture: ComponentFixture<ListingExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
