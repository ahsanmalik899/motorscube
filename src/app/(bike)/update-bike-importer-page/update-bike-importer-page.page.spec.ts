import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeImporterPagePage } from './update-bike-importer-page.page';

describe('UpdateBikeImporterPagePage', () => {
  let component: UpdateBikeImporterPagePage;
  let fixture: ComponentFixture<UpdateBikeImporterPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeImporterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
