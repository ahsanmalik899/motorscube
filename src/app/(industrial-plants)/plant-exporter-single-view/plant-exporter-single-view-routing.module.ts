import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantExporterSingleViewPage } from './plant-exporter-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantExporterSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantExporterSingleViewPageRoutingModule {}
