import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingLeasingFilterPage } from './listing-leasing-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingLeasingFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingLeasingFilterPageRoutingModule {}
