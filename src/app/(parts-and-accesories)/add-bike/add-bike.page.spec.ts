import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBikePage } from './add-bike.page';

describe('AddBikePage', () => {
  let component: AddBikePage;
  let fixture: ComponentFixture<AddBikePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
