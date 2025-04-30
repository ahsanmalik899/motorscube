import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachinerySalePage } from './post-machinery-sale.page';

describe('PostMachinerySalePage', () => {
  let component: PostMachinerySalePage;
  let fixture: ComponentFixture<PostMachinerySalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachinerySalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
