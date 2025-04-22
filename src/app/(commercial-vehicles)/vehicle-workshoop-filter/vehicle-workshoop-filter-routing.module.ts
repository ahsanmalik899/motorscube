import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleWorkshoopFilterPage } from './vehicle-workshoop-filter.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleWorkshoopFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleWorkshoopFilterPageRoutingModule {}
