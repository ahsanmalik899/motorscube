import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantHirePage } from './post-plant-hire.page';

describe('PostPlantHirePage', () => {
  let component: PostPlantHirePage;
  let fixture: ComponentFixture<PostPlantHirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantHirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
