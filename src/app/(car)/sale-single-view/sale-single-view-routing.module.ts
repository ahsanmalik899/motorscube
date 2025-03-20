import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleSingleViewPage } from './sale-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: SaleSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleSingleViewPageRoutingModule {}
