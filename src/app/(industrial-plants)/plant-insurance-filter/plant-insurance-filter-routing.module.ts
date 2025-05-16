import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantInsuranceFilterPage } from './plant-insurance-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantInsuranceFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantInsuranceFilterPageRoutingModule {}
