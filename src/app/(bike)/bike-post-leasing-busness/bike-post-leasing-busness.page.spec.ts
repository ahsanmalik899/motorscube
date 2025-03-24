import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostLeasingBusnessPage } from './bike-post-leasing-busness.page';

describe('BikePostLeasingBusnessPage', () => {
  let component: BikePostLeasingBusnessPage;
  let fixture: ComponentFixture<BikePostLeasingBusnessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostLeasingBusnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
