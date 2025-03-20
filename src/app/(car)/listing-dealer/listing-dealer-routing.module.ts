import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDealerPage } from './listing-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: ListingDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingDealerPageRoutingModule {}
