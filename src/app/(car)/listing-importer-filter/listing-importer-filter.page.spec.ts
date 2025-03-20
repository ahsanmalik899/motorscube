import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingImporterFilterPage } from './listing-importer-filter.page';

describe('ListingImporterFilterPage', () => {
  let component: ListingImporterFilterPage;
  let fixture: ComponentFixture<ListingImporterFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingImporterFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
