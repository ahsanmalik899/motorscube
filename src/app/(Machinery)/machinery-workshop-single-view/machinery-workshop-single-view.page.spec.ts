import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryWorkshopSingleViewPage } from './machinery-workshop-single-view.page';

describe('MachineryWorkshopSingleViewPage', () => {
  let component: MachineryWorkshopSingleViewPage;
  let fixture: ComponentFixture<MachineryWorkshopSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryWorkshopSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
