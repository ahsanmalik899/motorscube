import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMenuAfterLoginPage } from './main-menu-after-login.page';

describe('MainMenuAfterLoginPage', () => {
  let component: MainMenuAfterLoginPage;
  let fixture: ComponentFixture<MainMenuAfterLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuAfterLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
