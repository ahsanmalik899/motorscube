import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingExporterFilterPage } from './listing-exporter-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingExporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingExporterFilterPageRoutingModule {}
