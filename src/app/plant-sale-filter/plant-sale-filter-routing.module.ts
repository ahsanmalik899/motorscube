import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSaleFilterPage } from './plant-sale-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSaleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSaleFilterPageRoutingModule {}
