import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantSalePage } from './post-plant-sale.page';

describe('PostPlantSalePage', () => {
  let component: PostPlantSalePage;
  let fixture: ComponentFixture<PostPlantSalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
