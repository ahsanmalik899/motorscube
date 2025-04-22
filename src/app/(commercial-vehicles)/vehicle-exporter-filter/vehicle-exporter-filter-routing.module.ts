import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleExporterFilterPage } from './vehicle-exporter-filter.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleExporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleExporterFilterPageRoutingModule {}
