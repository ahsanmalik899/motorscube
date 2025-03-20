import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeShowroomFilterPage } from './bike-showroom-filter.page';

describe('BikeShowroomFilterPage', () => {
  let component: BikeShowroomFilterPage;
  let fixture: ComponentFixture<BikeShowroomFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeShowroomFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
