import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeYouPostedPage } from './bike-you-posted.page';

describe('BikeYouPostedPage', () => {
  let component: BikeYouPostedPage;
  let fixture: ComponentFixture<BikeYouPostedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeYouPostedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
