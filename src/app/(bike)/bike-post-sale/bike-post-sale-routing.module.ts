import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostSalePage } from './bike-post-sale.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostSalePageRoutingModule {}
