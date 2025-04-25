import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleWorkshopPage } from './post-vehicle-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleWorkshopPageRoutingModule {}
