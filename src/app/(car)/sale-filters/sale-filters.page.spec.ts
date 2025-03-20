import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaleFiltersPage } from './sale-filters.page';

describe('SaleFiltersPage', () => {
  let component: SaleFiltersPage;
  let fixture: ComponentFixture<SaleFiltersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleFiltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
