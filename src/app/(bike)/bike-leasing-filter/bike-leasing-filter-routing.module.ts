import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeLeasingFilterPage } from './bike-leasing-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeLeasingFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeLeasingFilterPageRoutingModule {}
