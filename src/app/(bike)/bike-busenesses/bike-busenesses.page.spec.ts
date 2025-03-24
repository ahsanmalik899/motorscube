import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeBusenessesPage } from './bike-busenesses.page';

describe('BikeBusenessesPage', () => {
  let component: BikeBusenessesPage;
  let fixture: ComponentFixture<BikeBusenessesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeBusenessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
