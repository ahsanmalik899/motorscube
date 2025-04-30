import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryExporterPage } from './update-machinery-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryExporterPageRoutingModule {}
