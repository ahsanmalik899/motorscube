import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingBikeImporterPage } from './listing-bike-importer.page';

describe('ListingBikeImporterPage', () => {
  let component: ListingBikeImporterPage;
  let fixture: ComponentFixture<ListingBikeImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBikeImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
