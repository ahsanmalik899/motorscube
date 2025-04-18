import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleHireSingleViewPage } from './vehicle-hire-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleHireSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleHireSingleViewPageRoutingModule {}
