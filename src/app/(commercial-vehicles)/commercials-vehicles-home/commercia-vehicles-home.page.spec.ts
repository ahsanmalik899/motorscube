import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommerciaVehiclesHomePage } from './commercia-vehicles-home.page';

describe('CommerciaVehiclesHomePage', () => {
  let component: CommerciaVehiclesHomePage;
  let fixture: ComponentFixture<CommerciaVehiclesHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerciaVehiclesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
