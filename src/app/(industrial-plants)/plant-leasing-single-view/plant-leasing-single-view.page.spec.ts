import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantLeasingSingleViewPage } from './plant-leasing-single-view.page';

describe('PlantLeasingSingleViewPage', () => {
  let component: PlantLeasingSingleViewPage;
  let fixture: ComponentFixture<PlantLeasingSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantLeasingSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
