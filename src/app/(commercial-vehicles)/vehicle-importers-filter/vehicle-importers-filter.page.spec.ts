import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleImportersFilterPage } from './vehicle-importers-filter.page';

describe('VehicleImportersFilterPage', () => {
  let component: VehicleImportersFilterPage;
  let fixture: ComponentFixture<VehicleImportersFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleImportersFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
