import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDrivingShchoolListingPage } from './vehicle-driving-shchool-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDrivingShchoolListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleDrivingShchoolListingPageRoutingModule {}
