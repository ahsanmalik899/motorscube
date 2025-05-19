import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantSchoolSingleViewPage } from './plant-school-single-view.page';

describe('PlantSchoolSingleViewPage', () => {
  let component: PlantSchoolSingleViewPage;
  let fixture: ComponentFixture<PlantSchoolSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSchoolSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
