import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeSaleListingPage } from './bike-sale-listing.page';

const routes: Routes = [
  {
    path: '',
    component: BikeSaleListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeSaleListingPageRoutingModule {}
