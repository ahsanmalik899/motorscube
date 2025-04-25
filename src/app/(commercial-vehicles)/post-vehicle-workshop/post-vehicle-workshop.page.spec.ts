import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleWorkshopPage } from './post-vehicle-workshop.page';

describe('PostVehicleWorkshopPage', () => {
  let component: PostVehicleWorkshopPage;
  let fixture: ComponentFixture<PostVehicleWorkshopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
