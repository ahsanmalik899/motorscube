import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForSalePage } from './for-sale.page';

describe('ForSalePage', () => {
  let component: ForSalePage;
  let fixture: ComponentFixture<ForSalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
