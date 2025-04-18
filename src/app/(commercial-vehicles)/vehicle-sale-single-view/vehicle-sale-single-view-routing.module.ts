import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleSaleSingleViewPage } from './vehicle-sale-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleSaleSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleSaleSingleViewPageRoutingModule {}
