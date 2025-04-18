import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleSaleSingleViewPage } from './vehicle-sale-single-view.page';

describe('VehicleSaleSingleViewPage', () => {
  let component: VehicleSaleSingleViewPage;
  let fixture: ComponentFixture<VehicleSaleSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSaleSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
