import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantDealerPage } from './post-plant-dealer.page';

describe('PostPlantDealerPage', () => {
  let component: PostPlantDealerPage;
  let fixture: ComponentFixture<PostPlantDealerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantDealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
