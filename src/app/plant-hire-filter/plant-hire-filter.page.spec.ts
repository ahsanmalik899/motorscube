import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantHireFilterPage } from './plant-hire-filter.page';

describe('PlantHireFilterPage', () => {
  let component: PlantHireFilterPage;
  let fixture: ComponentFixture<PlantHireFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantHireFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
