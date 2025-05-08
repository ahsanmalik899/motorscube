import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantBusenessPage } from './plant-buseness.page';

describe('PlantBusenessPage', () => {
  let component: PlantBusenessPage;
  let fixture: ComponentFixture<PlantBusenessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantBusenessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
