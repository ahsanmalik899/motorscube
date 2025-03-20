import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkshopSingleViewPage } from './workshop-single-view.page';

describe('WorkshopSingleViewPage', () => {
  let component: WorkshopSingleViewPage;
  let fixture: ComponentFixture<WorkshopSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
