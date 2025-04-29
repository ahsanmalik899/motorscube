import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryHireSingleViewPage } from './machinery-hire-single-view.page';

describe('MachineryHireSingleViewPage', () => {
  let component: MachineryHireSingleViewPage;
  let fixture: ComponentFixture<MachineryHireSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryHireSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
