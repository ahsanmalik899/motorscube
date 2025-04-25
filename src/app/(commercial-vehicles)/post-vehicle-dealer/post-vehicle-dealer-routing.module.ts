import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleDealerPage } from './post-vehicle-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleDealerPageRoutingModule {}
