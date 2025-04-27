import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDealerSingleviewPage } from './vehicle-dealer-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDealerSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleDealerSingleviewPageRoutingModule {}
