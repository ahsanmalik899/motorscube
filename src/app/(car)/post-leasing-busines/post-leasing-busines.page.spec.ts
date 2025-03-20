import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostLeasingBusinesPage } from './post-leasing-busines.page';

describe('PostLeasingBusinesPage', () => {
  let component: PostLeasingBusinesPage;
  let fixture: ComponentFixture<PostLeasingBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLeasingBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
