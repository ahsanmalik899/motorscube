import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleInsurancePage } from './post-vehicle-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleInsurancePageRoutingModule {}
