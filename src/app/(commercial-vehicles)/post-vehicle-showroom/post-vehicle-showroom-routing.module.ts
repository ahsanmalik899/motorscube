import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleShowroomPage } from './post-vehicle-showroom.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleShowroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleShowroomPageRoutingModule {}
