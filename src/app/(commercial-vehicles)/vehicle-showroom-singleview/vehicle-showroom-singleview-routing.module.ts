import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleShowroomSingleviewPage } from './vehicle-showroom-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleShowroomSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleShowroomSingleviewPageRoutingModule {}
