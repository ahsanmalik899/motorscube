import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMachineryExporterPage } from './update-machinery-exporter.page';

describe('UpdateMachineryExporterPage', () => {
  let component: UpdateMachineryExporterPage;
  let fixture: ComponentFixture<UpdateMachineryExporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMachineryExporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
