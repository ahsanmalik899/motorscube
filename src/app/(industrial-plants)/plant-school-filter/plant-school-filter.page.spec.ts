import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantSchoolFilterPage } from './plant-school-filter.page';

describe('PlantSchoolFilterPage', () => {
  let component: PlantSchoolFilterPage;
  let fixture: ComponentFixture<PlantSchoolFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSchoolFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
