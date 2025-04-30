import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryInsuranceListingPage } from './machinery-insurance-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryInsuranceListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryInsuranceListingPageRoutingModule {}
