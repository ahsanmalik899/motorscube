import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantDealerSingleViewPage } from './plant-dealer-single-view.page';

describe('PlantDealerSingleViewPage', () => {
  let component: PlantDealerSingleViewPage;
  let fixture: ComponentFixture<PlantDealerSingleViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDealerSingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
