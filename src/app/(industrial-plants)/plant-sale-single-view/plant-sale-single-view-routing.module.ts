import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSaleSingleViewPage } from './plant-sale-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSaleSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSaleSingleViewPageRoutingModule {}
