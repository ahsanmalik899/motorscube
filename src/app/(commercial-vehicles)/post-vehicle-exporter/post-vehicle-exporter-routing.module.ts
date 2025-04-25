import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleExporterPage } from './post-vehicle-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleExporterPageRoutingModule {}
