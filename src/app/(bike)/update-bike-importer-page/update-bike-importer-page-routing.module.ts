import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeImporterPagePage } from './update-bike-importer-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeImporterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeImporterPagePageRoutingModule {}
