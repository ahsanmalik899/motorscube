import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantSchoolPage } from './update-plant-school.page';

describe('UpdatePlantSchoolPage', () => {
  let component: UpdatePlantSchoolPage;
  let fixture: ComponentFixture<UpdatePlantSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
