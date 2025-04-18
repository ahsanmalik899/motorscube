import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleInsuranceListingPage } from './vehicle-insurance-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleInsuranceListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleInsuranceListingPageRoutingModule {}
