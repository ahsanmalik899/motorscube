import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleImportersListingPage } from './vehicle-importers-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleImportersListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleImportersListingPageRoutingModule {}
