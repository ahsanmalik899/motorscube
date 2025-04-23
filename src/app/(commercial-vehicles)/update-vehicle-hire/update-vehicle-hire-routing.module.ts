import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleHirePage } from './update-vehicle-hire.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleHirePageRoutingModule {}
