import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercialSaleListingPage } from './commercial-sale-listing.page';

const routes: Routes = [
  {
    path: '',
    component: CommercialSaleListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercialSaleListingPageRoutingModule {}
