import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantImporterSingleViewPage } from './plant-importer-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantImporterSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantImporterSingleViewPageRoutingModule {}
