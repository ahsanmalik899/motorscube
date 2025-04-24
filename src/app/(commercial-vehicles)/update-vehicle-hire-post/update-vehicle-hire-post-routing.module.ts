import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleHirePostPage } from './update-vehicle-hire-post.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleHirePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleHirePostPageRoutingModule {}
