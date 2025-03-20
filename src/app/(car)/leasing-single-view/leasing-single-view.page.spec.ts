import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeasingSingleViewPage } from './leasing-single-view.page';

describe('LeasingSingleViewPage', () => {
  let component: LeasingSingleViewPage;
  let fixture: ComponentFixture<LeasingSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
