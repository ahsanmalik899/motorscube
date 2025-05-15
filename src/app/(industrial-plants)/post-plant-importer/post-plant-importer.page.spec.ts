import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantImporterPage } from './post-plant-importer.page';

describe('PostPlantImporterPage', () => {
  let component: PostPlantImporterPage;
  let fixture: ComponentFixture<PostPlantImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
