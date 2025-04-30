import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMachineryExporterPage } from './post-machinery-exporter.page';

describe('PostMachineryExporterPage', () => {
  let component: PostMachineryExporterPage;
  let fixture: ComponentFixture<PostMachineryExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMachineryExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
