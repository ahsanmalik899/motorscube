import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercialVehicleBusenessPage } from './commercial-vehicle-buseness.page';

const routes: Routes = [
  {
    path: '',
    component: CommercialVehicleBusenessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercialVehicleBusenessPageRoutingModule {}
