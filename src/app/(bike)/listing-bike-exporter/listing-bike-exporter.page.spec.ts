import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingBikeExporterPage } from './listing-bike-exporter.page';

describe('ListingBikeExporterPage', () => {
  let component: ListingBikeExporterPage;
  let fixture: ComponentFixture<ListingBikeExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBikeExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
