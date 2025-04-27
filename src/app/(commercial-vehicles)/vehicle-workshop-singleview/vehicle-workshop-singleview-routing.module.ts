import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleWorkshopSingleviewPage } from './vehicle-workshop-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleWorkshopSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleWorkshopSingleviewPageRoutingModule {}
