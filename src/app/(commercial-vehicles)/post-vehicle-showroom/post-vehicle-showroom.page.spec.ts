import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleShowroomPage } from './post-vehicle-showroom.page';

describe('PostVehicleShowroomPage', () => {
  let component: PostVehicleShowroomPage;
  let fixture: ComponentFixture<PostVehicleShowroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleShowroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
