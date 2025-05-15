import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantLeasingListingPage } from './plant-leasing-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantLeasingListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantLeasingListingPageRoutingModule {}
