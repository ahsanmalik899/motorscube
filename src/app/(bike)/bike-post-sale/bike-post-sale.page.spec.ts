import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostSalePage } from './bike-post-sale.page';

describe('BikePostSalePage', () => {
  let component: BikePostSalePage;
  let fixture: ComponentFixture<BikePostSalePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
