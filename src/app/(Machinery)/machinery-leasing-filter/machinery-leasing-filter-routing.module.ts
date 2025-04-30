import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryLeasingFilterPage } from './machinery-leasing-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryLeasingFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryLeasingFilterPageRoutingModule {}
