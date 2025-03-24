import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostInsuranceBusnessPage } from './bike-post-insurance-busness.page';

describe('BikePostInsuranceBusnessPage', () => {
  let component: BikePostInsuranceBusnessPage;
  let fixture: ComponentFixture<BikePostInsuranceBusnessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostInsuranceBusnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
