import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingImporterPage } from './listing-importer.page';

describe('ListingImporterPage', () => {
  let component: ListingImporterPage;
  let fixture: ComponentFixture<ListingImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
