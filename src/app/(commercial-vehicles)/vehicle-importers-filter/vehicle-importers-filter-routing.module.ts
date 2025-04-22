import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleImportersFilterPage } from './vehicle-importers-filter.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleImportersFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleImportersFilterPageRoutingModule {}
