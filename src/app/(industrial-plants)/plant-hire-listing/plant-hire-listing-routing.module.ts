import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantHireListingPage } from './plant-hire-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantHireListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantHireListingPageRoutingModule {}
