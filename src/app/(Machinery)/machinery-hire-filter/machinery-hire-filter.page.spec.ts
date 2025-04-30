import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryHireFilterPage } from './machinery-hire-filter.page';

describe('MachineryHireFilterPage', () => {
  let component: MachineryHireFilterPage;
  let fixture: ComponentFixture<MachineryHireFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryHireFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
