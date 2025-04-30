import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryShowroomSingleViewPage } from './machinery-showroom-single-view.page';

describe('MachineryShowroomSingleViewPage', () => {
  let component: MachineryShowroomSingleViewPage;
  let fixture: ComponentFixture<MachineryShowroomSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryShowroomSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
