import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleShowroomFilterPage } from './vehicle-showroom-filter.page';

describe('VehicleShowroomFilterPage', () => {
  let component: VehicleShowroomFilterPage;
  let fixture: ComponentFixture<VehicleShowroomFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShowroomFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
