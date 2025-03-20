import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForHirePage } from './for-hire.page';

describe('ForHirePage', () => {
  let component: ForHirePage;
  let fixture: ComponentFixture<ForHirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForHirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
