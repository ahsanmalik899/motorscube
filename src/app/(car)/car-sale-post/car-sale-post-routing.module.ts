import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarSalePostPage } from './car-sale-post.page';

const routes: Routes = [
  {
    path: '',
    component: CarSalePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarSalePostPageRoutingModule {}
