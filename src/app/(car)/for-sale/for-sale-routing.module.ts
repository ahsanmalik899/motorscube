import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForSalePage } from './for-sale.page';

const routes: Routes = [
  {
    path: '',
    component: ForSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForSalePageRoutingModule {}
