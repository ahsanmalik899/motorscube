import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateExporterBusinesPage } from './update-exporter-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateExporterBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateExporterBusinesPageRoutingModule {}
