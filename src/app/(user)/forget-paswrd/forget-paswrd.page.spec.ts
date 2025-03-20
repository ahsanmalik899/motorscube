import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPaswrdPage } from './forget-paswrd.page';

describe('ForgetPaswrdPage', () => {
  let component: ForgetPaswrdPage;
  let fixture: ComponentFixture<ForgetPaswrdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPaswrdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
