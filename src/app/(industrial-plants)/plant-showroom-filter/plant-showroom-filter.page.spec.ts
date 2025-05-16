import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantShowroomFilterPage } from './plant-showroom-filter.page';

describe('PlantShowroomFilterPage', () => {
  let component: PlantShowroomFilterPage;
  let fixture: ComponentFixture<PlantShowroomFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantShowroomFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
