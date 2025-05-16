import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantExporterFilterPage } from './plant-exporter-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantExporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantExporterFilterPageRoutingModule {}
