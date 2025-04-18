import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleSaleFilterPage } from './vehicle-sale-filter.page';

describe('VehicleSaleFilterPage', () => {
  let component: VehicleSaleFilterPage;
  let fixture: ComponentFixture<VehicleSaleFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSaleFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
