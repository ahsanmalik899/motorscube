import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryWorkshopFilterPage } from './machinery-workshop-filter.page';

describe('MachineryWorkshopFilterPage', () => {
  let component: MachineryWorkshopFilterPage;
  let fixture: ComponentFixture<MachineryWorkshopFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryWorkshopFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
