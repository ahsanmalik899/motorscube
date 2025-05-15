import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantShowroomPage } from './post-plant-showroom.page';

describe('PostPlantShowroomPage', () => {
  let component: PostPlantShowroomPage;
  let fixture: ComponentFixture<PostPlantShowroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantShowroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
