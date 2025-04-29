import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachinerySaleSingleviewPage } from './machinery-sale-singleview.page';

describe('MachinerySaleSingleviewPage', () => {
  let component: MachinerySaleSingleviewPage;
  let fixture: ComponentFixture<MachinerySaleSingleviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinerySaleSingleviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
