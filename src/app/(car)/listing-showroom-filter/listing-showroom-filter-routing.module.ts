import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingShowroomFilterPage } from './listing-showroom-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingShowroomFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingShowroomFilterPageRoutingModule {}
