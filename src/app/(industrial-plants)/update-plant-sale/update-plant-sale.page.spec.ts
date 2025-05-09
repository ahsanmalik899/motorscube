import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantSalePage } from './update-plant-sale.page';

describe('UpdatePlantSalePage', () => {
  let component: UpdatePlantSalePage;
  let fixture: ComponentFixture<UpdatePlantSalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
