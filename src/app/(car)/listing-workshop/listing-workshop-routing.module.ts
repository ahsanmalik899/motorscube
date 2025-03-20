import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingWorkshopPage } from './listing-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: ListingWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingWorkshopPageRoutingModule {}
