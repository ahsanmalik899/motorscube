import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeImporterFilterPage } from './bike-importer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeImporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeImporterFilterPageRoutingModule {}
