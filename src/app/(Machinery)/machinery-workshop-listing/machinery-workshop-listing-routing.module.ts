import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryWorkshopListingPage } from './machinery-workshop-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryWorkshopListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryWorkshopListingPageRoutingModule {}
