import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMachinerySalePage } from './update-machinery-sale.page';

describe('UpdateMachinerySalePage', () => {
  let component: UpdateMachinerySalePage;
  let fixture: ComponentFixture<UpdateMachinerySalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMachinerySalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
