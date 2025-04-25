import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleLeasingPage } from './post-vehicle-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleLeasingPageRoutingModule {}
