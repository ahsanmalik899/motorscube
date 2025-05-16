import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantDealerFilterPage } from './plant-dealer-filter.page';

describe('PlantDealerFilterPage', () => {
  let component: PlantDealerFilterPage;
  let fixture: ComponentFixture<PlantDealerFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDealerFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
