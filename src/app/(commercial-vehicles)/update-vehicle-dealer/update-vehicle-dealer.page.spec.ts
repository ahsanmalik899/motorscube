import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleDealerPage } from './update-vehicle-dealer.page';

describe('UpdateVehicleDealerPage', () => {
  let component: UpdateVehicleDealerPage;
  let fixture: ComponentFixture<UpdateVehicleDealerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleDealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
