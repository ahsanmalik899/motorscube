import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostImporterBusinesPage } from './post-importer-busines.page';

describe('PostImporterBusinesPage', () => {
  let component: PostImporterBusinesPage;
  let fixture: ComponentFixture<PostImporterBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostImporterBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
