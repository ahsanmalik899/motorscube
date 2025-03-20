import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarHirePage } from './car-hire.page';

describe('CarHirePage', () => {
  let component: CarHirePage;
  let fixture: ComponentFixture<CarHirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
