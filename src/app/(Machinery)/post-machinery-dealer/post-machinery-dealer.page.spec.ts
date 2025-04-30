import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryDealerPage } from './post-machinery-dealer.page';

describe('PostMachineryDealerPage', () => {
  let component: PostMachineryDealerPage;
  let fixture: ComponentFixture<PostMachineryDealerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryDealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
