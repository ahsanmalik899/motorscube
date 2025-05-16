import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlantShowroomPage } from './update-plant-showroom.page';

describe('UpdatePlantShowroomPage', () => {
  let component: UpdatePlantShowroomPage;
  let fixture: ComponentFixture<UpdatePlantShowroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlantShowroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
