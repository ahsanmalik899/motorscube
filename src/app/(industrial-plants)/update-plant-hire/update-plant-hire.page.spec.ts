import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantHirePage } from './update-plant-hire.page';

describe('UpdatePlantHirePage', () => {
  let component: UpdatePlantHirePage;
  let fixture: ComponentFixture<UpdatePlantHirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantHirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
