import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingShowroomPage } from './listing-showroom.page';

describe('ListingShowroomPage', () => {
  let component: ListingShowroomPage;
  let fixture: ComponentFixture<ListingShowroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingShowroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
