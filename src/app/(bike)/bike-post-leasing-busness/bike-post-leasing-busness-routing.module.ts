import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostLeasingBusnessPage } from './bike-post-leasing-busness.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostLeasingBusnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostLeasingBusnessPageRoutingModule {}
