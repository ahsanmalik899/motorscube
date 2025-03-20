import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingBikeLeasingPage } from './listing-bike-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBikeLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingBikeLeasingPageRoutingModule {}
