import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryDrivingSchoolFilterPage } from './machinery-driving-school-filter.page';

describe('MachineryDrivingSchoolFilterPage', () => {
  let component: MachineryDrivingSchoolFilterPage;
  let fixture: ComponentFixture<MachineryDrivingSchoolFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryDrivingSchoolFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
