import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HireFiltersPage } from './hire-filters.page';

describe('HireFiltersPage', () => {
  let component: HireFiltersPage;
  let fixture: ComponentFixture<HireFiltersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HireFiltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
