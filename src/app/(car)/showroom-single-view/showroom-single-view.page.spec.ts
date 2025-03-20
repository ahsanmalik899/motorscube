import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowroomSingleViewPage } from './showroom-single-view.page';

describe('ShowroomSingleViewPage', () => {
  let component: ShowroomSingleViewPage;
  let fixture: ComponentFixture<ShowroomSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
