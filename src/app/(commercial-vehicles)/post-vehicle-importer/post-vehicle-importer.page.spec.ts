import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostVehicleImporterPage } from './post-vehicle-importer.page';

describe('PostVehicleImporterPage', () => {
  let component: PostVehicleImporterPage;
  let fixture: ComponentFixture<PostVehicleImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVehicleImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
