import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingExporterFilterPage } from './listing-exporter-filter.page';

describe('ListingExporterFilterPage', () => {
  let component: ListingExporterFilterPage;
  let fixture: ComponentFixture<ListingExporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingExporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
