import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostExporterBusnessPage } from './bike-post-exporter-busness.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostExporterBusnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostExporterBusnessPageRoutingModule {}
