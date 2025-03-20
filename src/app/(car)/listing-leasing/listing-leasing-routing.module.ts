import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingLeasingPage } from './listing-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: ListingLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingLeasingPageRoutingModule {}
