import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingImporterPage } from './listing-importer.page';

const routes: Routes = [
  {
    path: '',
    component: ListingImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingImporterPageRoutingModule {}
