import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantLeasingPage } from './post-plant-leasing.page';

describe('PostPlantLeasingPage', () => {
  let component: PostPlantLeasingPage;
  let fixture: ComponentFixture<PostPlantLeasingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantLeasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
