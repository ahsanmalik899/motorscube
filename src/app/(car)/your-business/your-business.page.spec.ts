import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourBusinessPage } from './your-business.page';

describe('YourBusinessPage', () => {
  let component: YourBusinessPage;
  let fixture: ComponentFixture<YourBusinessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
