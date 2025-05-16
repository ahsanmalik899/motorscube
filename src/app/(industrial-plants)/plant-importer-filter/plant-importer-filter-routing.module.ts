import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantImporterFilterPage } from './plant-importer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantImporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantImporterFilterPageRoutingModule {}
