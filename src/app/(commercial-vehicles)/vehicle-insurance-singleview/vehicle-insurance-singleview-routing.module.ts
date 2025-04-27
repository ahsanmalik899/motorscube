import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleInsuranceSingleviewPage } from './vehicle-insurance-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleInsuranceSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleInsuranceSingleviewPageRoutingModule {}
