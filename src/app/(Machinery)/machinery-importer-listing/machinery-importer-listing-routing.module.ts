import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryImporterListingPage } from './machinery-importer-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryImporterListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryImporterListingPageRoutingModule {}
