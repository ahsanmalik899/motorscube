import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDealerSingleviewPage } from './vehicle-dealer-singleview.page';

describe('VehicleDealerSingleviewPage', () => {
  let component: VehicleDealerSingleviewPage;
  let fixture: ComponentFixture<VehicleDealerSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDealerSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
