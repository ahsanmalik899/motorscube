import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingBikeExporterPage } from './listing-bike-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBikeExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingBikeExporterPageRoutingModule {}
