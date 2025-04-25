import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleWorkshopPage } from './update-vehicle-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleWorkshopPageRoutingModule {}
