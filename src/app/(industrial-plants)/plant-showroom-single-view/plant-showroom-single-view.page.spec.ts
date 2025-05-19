import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantShowroomSingleViewPage } from './plant-showroom-single-view.page';

describe('PlantShowroomSingleViewPage', () => {
  let component: PlantShowroomSingleViewPage;
  let fixture: ComponentFixture<PlantShowroomSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantShowroomSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
