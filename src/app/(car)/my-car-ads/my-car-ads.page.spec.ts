import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCarAdsPage } from './my-car-ads.page';

describe('MyCarAdsPage', () => {
  let component: MyCarAdsPage;
  let fixture: ComponentFixture<MyCarAdsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarAdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
