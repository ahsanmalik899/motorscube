import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicalHireFilterPage } from './vehical-hire-filter.page';

describe('VehicalHireFilterPage', () => {
  let component: VehicalHireFilterPage;
  let fixture: ComponentFixture<VehicalHireFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalHireFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
