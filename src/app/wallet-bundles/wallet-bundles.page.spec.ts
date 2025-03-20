import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalletBundlesPage } from './wallet-bundles.page';

describe('WalletBundlesPage', () => {
  let component: WalletBundlesPage;
  let fixture: ComponentFixture<WalletBundlesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBundlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
