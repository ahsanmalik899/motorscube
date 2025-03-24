import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeInsurancePostPage } from './update-bike-insurance-post.page';

describe('UpdateBikeInsurancePostPage', () => {
  let component: UpdateBikeInsurancePostPage;
  let fixture: ComponentFixture<UpdateBikeInsurancePostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeInsurancePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
