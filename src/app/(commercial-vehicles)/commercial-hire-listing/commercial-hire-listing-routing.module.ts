import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercialHireListingPage } from './commercial-hire-listing.page';

const routes: Routes = [
  {
    path: '',
    component: CommercialHireListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercialHireListingPageRoutingModule {}
