import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdsUpgradeHotspotPage } from './ads-upgrade-hotspot.page';

describe('AdsUpgradeHotspotPage', () => {
  let component: AdsUpgradeHotspotPage;
  let fixture: ComponentFixture<AdsUpgradeHotspotPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsUpgradeHotspotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
