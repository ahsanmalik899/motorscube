import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryLeasingSingleViewPage } from './machinery-leasing-single-view.page';

describe('MachineryLeasingSingleViewPage', () => {
  let component: MachineryLeasingSingleViewPage;
  let fixture: ComponentFixture<MachineryLeasingSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryLeasingSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
