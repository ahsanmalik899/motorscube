import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleLeasingPage } from './post-vehicle-leasing.page';

describe('PostVehicleLeasingPage', () => {
  let component: PostVehicleLeasingPage;
  let fixture: ComponentFixture<PostVehicleLeasingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleLeasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
