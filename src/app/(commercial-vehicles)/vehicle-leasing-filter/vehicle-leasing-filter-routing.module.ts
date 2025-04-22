import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleLeasingFilterPage } from './vehicle-leasing-filter.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleLeasingFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleLeasingFilterPageRoutingModule {}
