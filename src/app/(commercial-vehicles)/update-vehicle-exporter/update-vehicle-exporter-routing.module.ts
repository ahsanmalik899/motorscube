import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleExporterPage } from './update-vehicle-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleExporterPageRoutingModule {}
