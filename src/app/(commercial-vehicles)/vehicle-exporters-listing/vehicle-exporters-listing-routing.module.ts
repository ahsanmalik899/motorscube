import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleExportersListingPage } from './vehicle-exporters-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleExportersListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleExportersListingPageRoutingModule {}
