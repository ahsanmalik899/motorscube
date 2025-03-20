import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarSalePostPage } from './car-sale-post.page';

describe('CarSalePostPage', () => {
  let component: CarSalePostPage;
  let fixture: ComponentFixture<CarSalePostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSalePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
