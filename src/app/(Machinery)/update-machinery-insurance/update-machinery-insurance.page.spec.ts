import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMachineryInsurancePage } from './update-machinery-insurance.page';

describe('UpdateMachineryInsurancePage', () => {
  let component: UpdateMachineryInsurancePage;
  let fixture: ComponentFixture<UpdateMachineryInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMachineryInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
