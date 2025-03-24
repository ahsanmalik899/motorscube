import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostImporterBusenessPage } from './bike-post-importer-buseness.page';

describe('BikePostImporterBusenessPage', () => {
  let component: BikePostImporterBusenessPage;
  let fixture: ComponentFixture<BikePostImporterBusenessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostImporterBusenessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
