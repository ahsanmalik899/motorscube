import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantDealerListingPage } from './plant-dealer-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantDealerListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantDealerListingPageRoutingModule {}
