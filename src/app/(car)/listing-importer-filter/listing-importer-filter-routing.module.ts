import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingImporterFilterPage } from './listing-importer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingImporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingImporterFilterPageRoutingModule {}
