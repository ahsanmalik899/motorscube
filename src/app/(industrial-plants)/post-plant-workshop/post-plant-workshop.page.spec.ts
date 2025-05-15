import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantWorkshopPage } from './post-plant-workshop.page';

describe('PostPlantWorkshopPage', () => {
  let component: PostPlantWorkshopPage;
  let fixture: ComponentFixture<PostPlantWorkshopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
