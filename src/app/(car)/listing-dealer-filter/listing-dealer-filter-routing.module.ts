import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDealerFilterPage } from './listing-dealer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingDealerFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingDealerFilterPageRoutingModule {}
