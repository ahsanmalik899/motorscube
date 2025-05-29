import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCommercialVehiclePage } from './add-commercial-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AddCommercialVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCommercialVehiclePageRoutingModule {}
