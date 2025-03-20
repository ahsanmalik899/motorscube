import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeasingSingleViewPage } from './leasing-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: LeasingSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeasingSingleViewPageRoutingModule {}
