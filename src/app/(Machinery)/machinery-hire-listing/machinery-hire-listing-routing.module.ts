import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryHireListingPage } from './machinery-hire-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryHireListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryHireListingPageRoutingModule {}
