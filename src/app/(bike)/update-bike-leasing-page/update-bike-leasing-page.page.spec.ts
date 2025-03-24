import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeLeasingPagePage } from './update-bike-leasing-page.page';

describe('UpdateBikeLeasingPagePage', () => {
  let component: UpdateBikeLeasingPagePage;
  let fixture: ComponentFixture<UpdateBikeLeasingPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeLeasingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
