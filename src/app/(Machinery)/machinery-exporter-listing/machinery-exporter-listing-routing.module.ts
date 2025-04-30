import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryExporterListingPage } from './machinery-exporter-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryExporterListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryExporterListingPageRoutingModule {}
