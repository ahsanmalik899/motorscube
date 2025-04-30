import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryDealerFilterPage } from './machinery-dealer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryDealerFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryDealerFilterPageRoutingModule {}
