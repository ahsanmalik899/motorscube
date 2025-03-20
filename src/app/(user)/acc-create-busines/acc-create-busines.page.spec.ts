import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccCreateBusinesPage } from './acc-create-busines.page';

describe('AccCreateBusinesPage', () => {
  let component: AccCreateBusinesPage;
  let fixture: ComponentFixture<AccCreateBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccCreateBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
