import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantImporterPage } from './update-plant-importer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantImporterPageRoutingModule {}
