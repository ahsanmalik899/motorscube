import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleWorkshopListingPage } from './vehicle-workshop-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleWorkshopListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleWorkshopListingPageRoutingModule {}
