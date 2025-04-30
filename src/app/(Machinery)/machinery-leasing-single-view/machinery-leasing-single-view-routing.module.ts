import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryLeasingSingleViewPage } from './machinery-leasing-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryLeasingSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryLeasingSingleViewPageRoutingModule {}
