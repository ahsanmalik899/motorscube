import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDealersListingPage } from './vehicle-dealers-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDealersListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleDealersListingPageRoutingModule {}
