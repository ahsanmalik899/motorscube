import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingWorkshopFilterPage } from './listing-workshop-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingWorkshopFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingWorkshopFilterPageRoutingModule {}
