import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeLeasingFilterPage } from './bike-leasing-filter.page';

describe('BikeLeasingFilterPage', () => {
  let component: BikeLeasingFilterPage;
  let fixture: ComponentFixture<BikeLeasingFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeLeasingFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
