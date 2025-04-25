import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleImporterPage } from './post-vehicle-importer.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleImporterPageRoutingModule {}
