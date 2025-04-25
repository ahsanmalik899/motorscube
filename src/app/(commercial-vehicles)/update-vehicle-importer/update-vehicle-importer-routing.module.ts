import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleImporterPage } from './update-vehicle-importer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleImporterPageRoutingModule {}
