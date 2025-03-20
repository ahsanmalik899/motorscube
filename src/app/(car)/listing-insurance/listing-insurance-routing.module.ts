import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingInsurancePage } from './listing-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: ListingInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingInsurancePageRoutingModule {}
