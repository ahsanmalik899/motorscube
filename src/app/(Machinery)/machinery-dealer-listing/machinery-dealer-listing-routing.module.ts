import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryDealerListingPage } from './machinery-dealer-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryDealerListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryDealerListingPageRoutingModule {}
