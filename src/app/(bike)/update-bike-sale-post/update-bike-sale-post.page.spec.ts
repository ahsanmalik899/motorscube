import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeSalePostPage } from './update-bike-sale-post.page';

describe('UpdateBikeSalePostPage', () => {
  let component: UpdateBikeSalePostPage;
  let fixture: ComponentFixture<UpdateBikeSalePostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeSalePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
