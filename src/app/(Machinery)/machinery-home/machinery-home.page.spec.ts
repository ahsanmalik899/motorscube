import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryHomePage } from './machinery-home.page';

describe('MachineryHomePage', () => {
  let component: MachineryHomePage;
  let fixture: ComponentFixture<MachineryHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
