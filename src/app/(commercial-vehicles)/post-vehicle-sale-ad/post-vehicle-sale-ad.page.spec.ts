import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleSaleAdPage } from './post-vehicle-sale-ad.page';

describe('PostVehicleSaleAdPage', () => {
  let component: PostVehicleSaleAdPage;
  let fixture: ComponentFixture<PostVehicleSaleAdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleSaleAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
