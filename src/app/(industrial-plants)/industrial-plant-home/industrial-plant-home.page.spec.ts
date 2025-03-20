import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustrialPlantHomePage } from './industrial-plant-home.page';

describe('IndustrialPlantHomePage', () => {
  let component: IndustrialPlantHomePage;
  let fixture: ComponentFixture<IndustrialPlantHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialPlantHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
