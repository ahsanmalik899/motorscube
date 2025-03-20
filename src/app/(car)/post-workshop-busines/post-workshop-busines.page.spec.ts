import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostWorkshopBusinesPage } from './post-workshop-busines.page';

describe('PostWorkshopBusinesPage', () => {
  let component: PostWorkshopBusinesPage;
  let fixture: ComponentFixture<PostWorkshopBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWorkshopBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
