import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDealerBusinesPage } from './post-dealer-busines.page';

describe('PostDealerBusinesPage', () => {
  let component: PostDealerBusinesPage;
  let fixture: ComponentFixture<PostDealerBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDealerBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
