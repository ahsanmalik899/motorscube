import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeSaleFilterPage } from './bike-sale-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeSaleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeSaleFilterPageRoutingModule {}
