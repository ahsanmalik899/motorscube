import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleLeasingPage } from './update-vehicle-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleLeasingPageRoutingModule {}
