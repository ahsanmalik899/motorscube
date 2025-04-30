import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryHirePage } from './post-machinery-hire.page';

describe('PostMachineryHirePage', () => {
  let component: PostMachineryHirePage;
  let fixture: ComponentFixture<PostMachineryHirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryHirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
