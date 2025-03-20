import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerSingleViewPage } from './dealer-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: DealerSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerSingleViewPageRoutingModule {}
