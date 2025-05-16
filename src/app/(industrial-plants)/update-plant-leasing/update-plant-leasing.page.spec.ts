import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantLeasingPage } from './update-plant-leasing.page';

describe('UpdatePlantLeasingPage', () => {
  let component: UpdatePlantLeasingPage;
  let fixture: ComponentFixture<UpdatePlantLeasingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantLeasingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
