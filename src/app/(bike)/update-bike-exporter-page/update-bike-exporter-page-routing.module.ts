import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeExporterPagePage } from './update-bike-exporter-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeExporterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeExporterPagePageRoutingModule {}
