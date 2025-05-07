import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantSaleSingleViewPage } from './plant-sale-single-view.page';

describe('PlantSaleSingleViewPage', () => {
  let component: PlantSaleSingleViewPage;
  let fixture: ComponentFixture<PlantSaleSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSaleSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
