import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantInsuranceSingleViewPage } from './plant-insurance-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantInsuranceSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantInsuranceSingleViewPageRoutingModule {}
