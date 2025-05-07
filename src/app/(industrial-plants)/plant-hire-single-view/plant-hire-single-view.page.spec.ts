import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantHireSingleViewPage } from './plant-hire-single-view.page';

describe('PlantHireSingleViewPage', () => {
  let component: PlantHireSingleViewPage;
  let fixture: ComponentFixture<PlantHireSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantHireSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
