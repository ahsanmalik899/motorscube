import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachinerySaleFilterPage } from './machinery-sale-filter.page';

describe('MachinerySaleFilterPage', () => {
  let component: MachinerySaleFilterPage;
  let fixture: ComponentFixture<MachinerySaleFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinerySaleFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
