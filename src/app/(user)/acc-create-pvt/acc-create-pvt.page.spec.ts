import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccCreatePvtPage } from './acc-create-pvt.page';

describe('AccCreatePvtPage', () => {
  let component: AccCreatePvtPage;
  let fixture: ComponentFixture<AccCreatePvtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccCreatePvtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
