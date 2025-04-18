import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleSaleFilterPage } from './vehicle-sale-filter.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleSaleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleSaleFilterPageRoutingModule {}
