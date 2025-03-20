import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeInsuranceFilterPage } from './bike-insurance-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeInsuranceFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeInsuranceFilterPageRoutingModule {}
