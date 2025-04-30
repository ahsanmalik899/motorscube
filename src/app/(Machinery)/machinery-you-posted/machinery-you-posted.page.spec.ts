import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineryYouPostedPage } from './machinery-you-posted.page';

describe('MachineryYouPostedPage', () => {
  let component: MachineryYouPostedPage;
  let fixture: ComponentFixture<MachineryYouPostedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryYouPostedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
