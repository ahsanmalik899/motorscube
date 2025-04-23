import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleSaleAdPage } from './post-vehicle-sale-ad.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleSaleAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleSaleAdPageRoutingModule {}
