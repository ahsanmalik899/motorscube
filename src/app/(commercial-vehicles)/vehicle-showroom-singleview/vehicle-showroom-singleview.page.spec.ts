import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleShowroomSingleviewPage } from './vehicle-showroom-singleview.page';

describe('VehicleShowroomSingleviewPage', () => {
  let component: VehicleShowroomSingleviewPage;
  let fixture: ComponentFixture<VehicleShowroomSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShowroomSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
