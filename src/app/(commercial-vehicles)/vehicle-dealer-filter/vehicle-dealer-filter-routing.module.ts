import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDealerFilterPage } from './vehicle-dealer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDealerFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleDealerFilterPageRoutingModule {}
