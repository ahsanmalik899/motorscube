import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantWorkshopFilterPage } from './plant-workshop-filter.page';

describe('PlantWorkshopFilterPage', () => {
  let component: PlantWorkshopFilterPage;
  let fixture: ComponentFixture<PlantWorkshopFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantWorkshopFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
