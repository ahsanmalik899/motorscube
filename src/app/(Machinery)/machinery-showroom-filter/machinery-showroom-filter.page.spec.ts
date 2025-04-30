import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryShowroomFilterPage } from './machinery-showroom-filter.page';

describe('MachineryShowroomFilterPage', () => {
  let component: MachineryShowroomFilterPage;
  let fixture: ComponentFixture<MachineryShowroomFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryShowroomFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
