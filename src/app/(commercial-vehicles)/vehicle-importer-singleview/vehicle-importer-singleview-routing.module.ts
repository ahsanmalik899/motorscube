import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleImporterSingleviewPage } from './vehicle-importer-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleImporterSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleImporterSingleviewPageRoutingModule {}
