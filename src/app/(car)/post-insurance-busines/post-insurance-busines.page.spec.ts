import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostInsuranceBusinesPage } from './post-insurance-busines.page';

describe('PostInsuranceBusinesPage', () => {
  let component: PostInsuranceBusinesPage;
  let fixture: ComponentFixture<PostInsuranceBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInsuranceBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
