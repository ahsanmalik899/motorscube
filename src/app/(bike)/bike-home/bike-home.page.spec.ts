import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeHomePage } from './bike-home.page';

describe('BikeHomePage', () => {
  let component: BikeHomePage;
  let fixture: ComponentFixture<BikeHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
