import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeExporterPagePage } from './update-bike-exporter-page.page';

describe('UpdateBikeExporterPagePage', () => {
  let component: UpdateBikeExporterPagePage;
  let fixture: ComponentFixture<UpdateBikeExporterPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeExporterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
