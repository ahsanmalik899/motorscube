import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostInsuranceBusnessPage } from './bike-post-insurance-busness.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostInsuranceBusnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostInsuranceBusnessPageRoutingModule {}
