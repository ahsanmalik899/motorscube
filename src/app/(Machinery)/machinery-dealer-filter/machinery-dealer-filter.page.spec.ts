import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryDealerFilterPage } from './machinery-dealer-filter.page';

describe('MachineryDealerFilterPage', () => {
  let component: MachineryDealerFilterPage;
  let fixture: ComponentFixture<MachineryDealerFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryDealerFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
