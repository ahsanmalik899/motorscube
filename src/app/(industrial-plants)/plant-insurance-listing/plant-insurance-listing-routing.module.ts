import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantInsuranceListingPage } from './plant-insurance-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantInsuranceListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantInsuranceListingPageRoutingModule {}
