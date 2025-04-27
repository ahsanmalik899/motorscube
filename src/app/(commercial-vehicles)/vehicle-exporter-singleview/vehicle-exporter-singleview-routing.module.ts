import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleExporterSingleviewPage } from './vehicle-exporter-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleExporterSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleExporterSingleviewPageRoutingModule {}
