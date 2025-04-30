import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryInsurancePage } from './post-machinery-insurance.page';

describe('PostMachineryInsurancePage', () => {
  let component: PostMachineryInsurancePage;
  let fixture: ComponentFixture<PostMachineryInsurancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
