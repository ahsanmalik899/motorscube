import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantExporterPage } from './post-plant-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantExporterPageRoutingModule {}
