import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountProfPvtPage } from './account-prof-pvt.page';

describe('AccountProfPvtPage', () => {
  let component: AccountProfPvtPage;
  let fixture: ComponentFixture<AccountProfPvtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfPvtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
