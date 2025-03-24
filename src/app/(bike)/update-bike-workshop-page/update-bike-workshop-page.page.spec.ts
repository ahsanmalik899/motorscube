import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeWorkshopPagePage } from './update-bike-workshop-page.page';

describe('UpdateBikeWorkshopPagePage', () => {
  let component: UpdateBikeWorkshopPagePage;
  let fixture: ComponentFixture<UpdateBikeWorkshopPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeWorkshopPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
