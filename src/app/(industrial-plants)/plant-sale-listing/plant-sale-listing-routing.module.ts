import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSaleListingPage } from './plant-sale-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSaleListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSaleListingPageRoutingModule {}
