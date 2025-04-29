import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinerySaleListingPage } from './machinery-sale-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachinerySaleListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinerySaleListingPageRoutingModule {}
