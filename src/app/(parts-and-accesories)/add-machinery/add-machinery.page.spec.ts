import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMachineryPage } from './add-machinery.page';

describe('AddMachineryPage', () => {
  let component: AddMachineryPage;
  let fixture: ComponentFixture<AddMachineryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMachineryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
