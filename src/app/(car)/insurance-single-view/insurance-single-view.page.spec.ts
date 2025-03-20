import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceSingleViewPage } from './insurance-single-view.page';

describe('InsuranceSingleViewPage', () => {
  let component: InsuranceSingleViewPage;
  let fixture: ComponentFixture<InsuranceSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
