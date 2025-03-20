import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingBikeShowroomPage } from './listing-bike-showroom.page';

describe('ListingBikeShowroomPage', () => {
  let component: ListingBikeShowroomPage;
  let fixture: ComponentFixture<ListingBikeShowroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBikeShowroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
