import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommercialVehicleBusenessPage } from './commercial-vehicle-buseness.page';

describe('CommercialVehicleBusenessPage', () => {
  let component: CommercialVehicleBusenessPage;
  let fixture: ComponentFixture<CommercialVehicleBusenessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialVehicleBusenessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
