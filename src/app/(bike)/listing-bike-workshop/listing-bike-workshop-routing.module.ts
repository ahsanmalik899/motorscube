import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingBikeWorkshopPage } from './listing-bike-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBikeWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingBikeWorkshopPageRoutingModule {}
