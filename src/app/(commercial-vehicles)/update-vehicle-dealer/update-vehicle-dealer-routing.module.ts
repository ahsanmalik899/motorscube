import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleDealerPage } from './update-vehicle-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleDealerPageRoutingModule {}
