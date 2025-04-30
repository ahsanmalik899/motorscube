import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryInsuranceSingleViewPage } from './machinery-insurance-single-view.page';

describe('MachineryInsuranceSingleViewPage', () => {
  let component: MachineryInsuranceSingleViewPage;
  let fixture: ComponentFixture<MachineryInsuranceSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryInsuranceSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
