import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryLeasingListingPage } from './machinery-leasing-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryLeasingListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryLeasingListingPageRoutingModule {}
