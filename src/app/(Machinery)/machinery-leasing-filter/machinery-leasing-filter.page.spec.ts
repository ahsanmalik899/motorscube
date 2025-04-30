import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryLeasingFilterPage } from './machinery-leasing-filter.page';

describe('MachineryLeasingFilterPage', () => {
  let component: MachineryLeasingFilterPage;
  let fixture: ComponentFixture<MachineryLeasingFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryLeasingFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
