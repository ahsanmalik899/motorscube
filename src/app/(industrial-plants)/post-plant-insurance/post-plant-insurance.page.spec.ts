import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantInsurancePage } from './post-plant-insurance.page';

describe('PostPlantInsurancePage', () => {
  let component: PostPlantInsurancePage;
  let fixture: ComponentFixture<PostPlantInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
