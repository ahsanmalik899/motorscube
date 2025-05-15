import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantShowroomListingPage } from './plant-showroom-listing.page';

describe('PlantShowroomListingPage', () => {
  let component: PlantShowroomListingPage;
  let fixture: ComponentFixture<PlantShowroomListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantShowroomListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
