import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccCreatePvtPage } from './acc-create-pvt.page';

const routes: Routes = [
  {
    path: '',
    component: AccCreatePvtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccCreatePvtPageRoutingModule {}
