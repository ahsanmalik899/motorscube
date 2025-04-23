import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleHirePage } from './post-vehicle-hire.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleHirePageRoutingModule {}
