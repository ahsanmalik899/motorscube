import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdsUpgradeSupremePage } from './ads-upgrade-supreme.page';

describe('AdsUpgradeSupremePage', () => {
  let component: AdsUpgradeSupremePage;
  let fixture: ComponentFixture<AdsUpgradeSupremePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsUpgradeSupremePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
