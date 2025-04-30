import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMachineryImporterPage } from './update-machinery-importer.page';

describe('UpdateMachineryImporterPage', () => {
  let component: UpdateMachineryImporterPage;
  let fixture: ComponentFixture<UpdateMachineryImporterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMachineryImporterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
