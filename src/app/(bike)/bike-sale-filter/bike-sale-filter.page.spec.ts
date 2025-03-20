import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeSaleFilterPage } from './bike-sale-filter.page';

describe('BikeSaleFilterPage', () => {
  let component: BikeSaleFilterPage;
  let fixture: ComponentFixture<BikeSaleFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeSaleFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
