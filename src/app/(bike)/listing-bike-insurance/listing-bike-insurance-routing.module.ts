import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingBikeInsurancePage } from './listing-bike-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBikeInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingBikeInsurancePageRoutingModule {}
