import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryDealerSingleViewPage } from './machinery-dealer-single-view.page';

describe('MachineryDealerSingleViewPage', () => {
  let component: MachineryDealerSingleViewPage;
  let fixture: ComponentFixture<MachineryDealerSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryDealerSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
