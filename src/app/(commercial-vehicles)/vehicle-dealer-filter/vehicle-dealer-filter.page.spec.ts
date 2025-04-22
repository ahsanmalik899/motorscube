import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDealerFilterPage } from './vehicle-dealer-filter.page';

describe('VehicleDealerFilterPage', () => {
  let component: VehicleDealerFilterPage;
  let fixture: ComponentFixture<VehicleDealerFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDealerFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
