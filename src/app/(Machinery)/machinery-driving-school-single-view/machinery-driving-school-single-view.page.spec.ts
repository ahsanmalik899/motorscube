import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryDrivingSchoolSingleViewPage } from './machinery-driving-school-single-view.page';

describe('MachineryDrivingSchoolSingleViewPage', () => {
  let component: MachineryDrivingSchoolSingleViewPage;
  let fixture: ComponentFixture<MachineryDrivingSchoolSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryDrivingSchoolSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
