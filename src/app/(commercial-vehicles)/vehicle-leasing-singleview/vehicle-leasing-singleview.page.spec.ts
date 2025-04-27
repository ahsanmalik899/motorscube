import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleLeasingSingleviewPage } from './vehicle-leasing-singleview.page';

describe('VehicleLeasingSingleviewPage', () => {
  let component: VehicleLeasingSingleviewPage;
  let fixture: ComponentFixture<VehicleLeasingSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLeasingSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
