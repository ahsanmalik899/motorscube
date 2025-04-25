import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleInsurancePage } from './post-vehicle-insurance.page';

describe('PostVehicleInsurancePage', () => {
  let component: PostVehicleInsurancePage;
  let fixture: ComponentFixture<PostVehicleInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
