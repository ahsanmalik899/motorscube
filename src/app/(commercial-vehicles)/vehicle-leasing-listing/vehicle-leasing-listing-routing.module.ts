import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleLeasingListingPage } from './vehicle-leasing-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleLeasingListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleLeasingListingPageRoutingModule {}
