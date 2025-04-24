import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleSalePostPage } from './update-vehicle-sale-post.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleSalePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleSalePostPageRoutingModule {}
