import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantSchoolPage } from './post-plant-school.page';

describe('PostPlantSchoolPage', () => {
  let component: PostPlantSchoolPage;
  let fixture: ComponentFixture<PostPlantSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
