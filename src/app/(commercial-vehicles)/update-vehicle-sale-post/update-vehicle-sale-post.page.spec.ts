import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateVehicleSalePostPage } from './update-vehicle-sale-post.page';

describe('UpdateVehicleSalePostPage', () => {
  let component: UpdateVehicleSalePostPage;
  let fixture: ComponentFixture<UpdateVehicleSalePostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleSalePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
