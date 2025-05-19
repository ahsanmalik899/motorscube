import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantWorkshoopSingleViewPage } from './plant-workshoop-single-view.page';

describe('PlantWorkshoopSingleViewPage', () => {
  let component: PlantWorkshoopSingleViewPage;
  let fixture: ComponentFixture<PlantWorkshoopSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantWorkshoopSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
