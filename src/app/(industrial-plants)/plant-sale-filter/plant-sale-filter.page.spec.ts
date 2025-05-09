import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantSaleFilterPage } from './plant-sale-filter.page';

describe('PlantSaleFilterPage', () => {
  let component: PlantSaleFilterPage;
  let fixture: ComponentFixture<PlantSaleFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSaleFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
