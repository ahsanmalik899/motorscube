import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryImporterPage } from './post-machinery-importer.page';

describe('PostMachineryImporterPage', () => {
  let component: PostMachineryImporterPage;
  let fixture: ComponentFixture<PostMachineryImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
