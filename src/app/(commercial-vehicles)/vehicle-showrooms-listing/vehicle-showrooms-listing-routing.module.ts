import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleShowroomsListingPage } from './vehicle-showrooms-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleShowroomsListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleShowroomsListingPageRoutingModule {}
