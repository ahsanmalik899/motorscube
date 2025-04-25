import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleDealerPage } from './post-vehicle-dealer.page';

describe('PostVehicleDealerPage', () => {
  let component: PostVehicleDealerPage;
  let fixture: ComponentFixture<PostVehicleDealerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleDealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
