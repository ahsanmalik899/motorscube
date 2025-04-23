import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleSalePage } from './update-vehicle-sale.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleSalePageRoutingModule {}
