import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingBikeImporterPage } from './listing-bike-importer.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBikeImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingBikeImporterPageRoutingModule {}
