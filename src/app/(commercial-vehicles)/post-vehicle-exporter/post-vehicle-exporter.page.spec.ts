import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleExporterPage } from './post-vehicle-exporter.page';

describe('PostVehicleExporterPage', () => {
  let component: PostVehicleExporterPage;
  let fixture: ComponentFixture<PostVehicleExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
