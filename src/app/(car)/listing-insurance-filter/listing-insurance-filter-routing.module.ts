import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingInsuranceFilterPage } from './listing-insurance-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingInsuranceFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingInsuranceFilterPageRoutingModule {}
