import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleLeasingFilterPage } from './vehicle-leasing-filter.page';

describe('VehicleLeasingFilterPage', () => {
  let component: VehicleLeasingFilterPage;
  let fixture: ComponentFixture<VehicleLeasingFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLeasingFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
