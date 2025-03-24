import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeShowroomPagePage } from './update-bike-showroom-page.page';

describe('UpdateBikeShowroomPagePage', () => {
  let component: UpdateBikeShowroomPagePage;
  let fixture: ComponentFixture<UpdateBikeShowroomPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeShowroomPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
