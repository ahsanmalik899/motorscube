import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingBikeDealerPage } from './listing-bike-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBikeDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingBikeDealerPageRoutingModule {}
