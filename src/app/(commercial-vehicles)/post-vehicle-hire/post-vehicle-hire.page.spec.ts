import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleHirePage } from './post-vehicle-hire.page';

describe('PostVehicleHirePage', () => {
  let component: PostVehicleHirePage;
  let fixture: ComponentFixture<PostVehicleHirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleHirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
