import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryLeasingPage } from './post-machinery-leasing.page';

describe('PostMachineryLeasingPage', () => {
  let component: PostMachineryLeasingPage;
  let fixture: ComponentFixture<PostMachineryLeasingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryLeasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
