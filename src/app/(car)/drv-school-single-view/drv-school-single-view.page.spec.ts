import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrvSchoolSingleViewPage } from './drv-school-single-view.page';

describe('DrvSchoolSingleViewPage', () => {
  let component: DrvSchoolSingleViewPage;
  let fixture: ComponentFixture<DrvSchoolSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DrvSchoolSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
