import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostShowroomBusinesPage } from './post-showroom-busines.page';

describe('PostShowroomBusinesPage', () => {
  let component: PostShowroomBusinesPage;
  let fixture: ComponentFixture<PostShowroomBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostShowroomBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
