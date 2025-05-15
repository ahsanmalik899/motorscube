import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantExporterListingPage } from './plant-exporter-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantExporterListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantExporterListingPageRoutingModule {}
