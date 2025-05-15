import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantImporterPage } from './post-plant-importer.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantImporterPageRoutingModule {}
