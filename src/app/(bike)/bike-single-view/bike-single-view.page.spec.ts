import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeSingleViewPage } from './bike-single-view.page';

describe('BikeSingleViewPage', () => {
  let component: BikeSingleViewPage;
  let fixture: ComponentFixture<BikeSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
