import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarAdSaleUpdatePage } from './car-ad-sale-update.page';

describe('CarAdSaleUpdatePage', () => {
  let component: CarAdSaleUpdatePage;
  let fixture: ComponentFixture<CarAdSaleUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAdSaleUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
