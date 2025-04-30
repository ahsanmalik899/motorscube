import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryDealerSingleViewPage } from './machinery-dealer-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryDealerSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryDealerSingleViewPageRoutingModule {}
