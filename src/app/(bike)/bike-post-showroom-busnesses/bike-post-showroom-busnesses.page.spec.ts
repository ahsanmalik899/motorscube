import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostShowroomBusnessesPage } from './bike-post-showroom-busnesses.page';

describe('BikePostShowroomBusnessesPage', () => {
  let component: BikePostShowroomBusnessesPage;
  let fixture: ComponentFixture<BikePostShowroomBusnessesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostShowroomBusnessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
