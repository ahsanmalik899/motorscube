import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleInsurancePage } from './update-vehicle-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleInsurancePageRoutingModule {}
