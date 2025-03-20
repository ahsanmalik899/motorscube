import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDrivingSchoolPage } from './post-driving-school.page';

describe('PostDrivingSchoolPage', () => {
  let component: PostDrivingSchoolPage;
  let fixture: ComponentFixture<PostDrivingSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDrivingSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
