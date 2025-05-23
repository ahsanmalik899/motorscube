import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartsAndPage } from './parts-and.page';

describe('PartsAndPage', () => {
  let component: PartsAndPage;
  let fixture: ComponentFixture<PartsAndPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsAndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
