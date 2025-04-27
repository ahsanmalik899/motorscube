import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleLeasingSingleviewPage } from './vehicle-leasing-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleLeasingSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleLeasingSingleviewPageRoutingModule {}
