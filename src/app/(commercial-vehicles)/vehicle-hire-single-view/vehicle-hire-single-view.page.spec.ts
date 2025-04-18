import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleHireSingleViewPage } from './vehicle-hire-single-view.page';

describe('VehicleHireSingleViewPage', () => {
  let component: VehicleHireSingleViewPage;
  let fixture: ComponentFixture<VehicleHireSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleHireSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
