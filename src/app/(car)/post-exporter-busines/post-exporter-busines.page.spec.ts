import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostExporterBusinesPage } from './post-exporter-busines.page';

describe('PostExporterBusinesPage', () => {
  let component: PostExporterBusinesPage;
  let fixture: ComponentFixture<PostExporterBusinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostExporterBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
