import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantSalePage } from './update-plant-sale.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantSalePageRoutingModule {}
