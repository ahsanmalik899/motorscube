import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeExporterFilterPage } from './bike-exporter-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeExporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeExporterFilterPageRoutingModule {}
