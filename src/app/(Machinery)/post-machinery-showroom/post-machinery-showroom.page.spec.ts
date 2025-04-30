import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryShowroomPage } from './post-machinery-showroom.page';

describe('PostMachineryShowroomPage', () => {
  let component: PostMachineryShowroomPage;
  let fixture: ComponentFixture<PostMachineryShowroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryShowroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
