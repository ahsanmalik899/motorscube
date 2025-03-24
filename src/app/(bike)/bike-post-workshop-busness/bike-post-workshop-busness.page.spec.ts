import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostWorkshopBusnessPage } from './bike-post-workshop-busness.page';

describe('BikePostWorkshopBusnessPage', () => {
  let component: BikePostWorkshopBusnessPage;
  let fixture: ComponentFixture<BikePostWorkshopBusnessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostWorkshopBusnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
