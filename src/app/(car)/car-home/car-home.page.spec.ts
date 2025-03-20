import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarHomePage } from './car-home.page';

describe('CarHomePage', () => {
  let component: CarHomePage;
  let fixture: ComponentFixture<CarHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
