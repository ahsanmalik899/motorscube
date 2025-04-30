import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryWorkshopPage } from './post-machinery-workshop.page';

describe('PostMachineryWorkshopPage', () => {
  let component: PostMachineryWorkshopPage;
  let fixture: ComponentFixture<PostMachineryWorkshopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
