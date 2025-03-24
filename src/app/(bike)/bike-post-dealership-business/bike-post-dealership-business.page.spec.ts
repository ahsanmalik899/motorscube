import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikePostDealershipBusinessPage } from './bike-post-dealership-business.page';

describe('BikePostDealershipBusinessPage', () => {
  let component: BikePostDealershipBusinessPage;
  let fixture: ComponentFixture<BikePostDealershipBusinessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePostDealershipBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
