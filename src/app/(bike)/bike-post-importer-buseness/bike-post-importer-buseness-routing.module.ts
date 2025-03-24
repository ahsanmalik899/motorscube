import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostImporterBusenessPage } from './bike-post-importer-buseness.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostImporterBusenessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostImporterBusenessPageRoutingModule {}
