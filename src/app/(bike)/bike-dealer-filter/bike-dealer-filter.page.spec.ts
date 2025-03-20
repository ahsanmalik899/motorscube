import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeDealerFilterPage } from './bike-dealer-filter.page';

describe('BikeDealerFilterPage', () => {
  let component: BikeDealerFilterPage;
  let fixture: ComponentFixture<BikeDealerFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDealerFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
