import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryBusenessPage } from './machinery-buseness.page';

describe('MachineryBusenessPage', () => {
  let component: MachineryBusenessPage;
  let fixture: ComponentFixture<MachineryBusenessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryBusenessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
