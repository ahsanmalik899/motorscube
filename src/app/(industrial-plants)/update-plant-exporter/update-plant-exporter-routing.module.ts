import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantExporterPage } from './update-plant-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantExporterPageRoutingModule {}
