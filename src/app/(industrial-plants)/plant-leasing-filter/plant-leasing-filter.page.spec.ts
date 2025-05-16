import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantLeasingFilterPage } from './plant-leasing-filter.page';

describe('PlantLeasingFilterPage', () => {
  let component: PlantLeasingFilterPage;
  let fixture: ComponentFixture<PlantLeasingFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantLeasingFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
