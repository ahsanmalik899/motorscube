import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleWorkshoopFilterPage } from './vehicle-workshoop-filter.page';

describe('VehicleWorkshoopFilterPage', () => {
  let component: VehicleWorkshoopFilterPage;
  let fixture: ComponentFixture<VehicleWorkshoopFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleWorkshoopFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
