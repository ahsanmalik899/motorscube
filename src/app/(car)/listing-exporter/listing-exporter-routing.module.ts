import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingExporterPage } from './listing-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingExporterPageRoutingModule {}
