import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HireSingleViewPage } from './hire-single-view.page';

describe('HireSingleViewPage', () => {
  let component: HireSingleViewPage;
  let fixture: ComponentFixture<HireSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HireSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
