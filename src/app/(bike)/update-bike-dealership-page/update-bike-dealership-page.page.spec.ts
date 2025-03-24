import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBikeDealershipPagePage } from './update-bike-dealership-page.page';

describe('UpdateBikeDealershipPagePage', () => {
  let component: UpdateBikeDealershipPagePage;
  let fixture: ComponentFixture<UpdateBikeDealershipPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBikeDealershipPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
