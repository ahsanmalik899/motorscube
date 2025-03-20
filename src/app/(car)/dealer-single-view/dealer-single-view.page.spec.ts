import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DealerSingleViewPage } from './dealer-single-view.page';

describe('DealerSingleViewPage', () => {
  let component: DealerSingleViewPage;
  let fixture: ComponentFixture<DealerSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
