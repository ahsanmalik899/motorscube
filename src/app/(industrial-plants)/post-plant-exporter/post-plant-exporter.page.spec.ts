import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPlantExporterPage } from './post-plant-exporter.page';

describe('PostPlantExporterPage', () => {
  let component: PostPlantExporterPage;
  let fixture: ComponentFixture<PostPlantExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlantExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
