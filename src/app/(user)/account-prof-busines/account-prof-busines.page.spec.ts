import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountProfBusinesPage } from './account-prof-busines.page';

describe('AccountProfBusinesPage', () => {
  let component: AccountProfBusinesPage;
  let fixture: ComponentFixture<AccountProfBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
