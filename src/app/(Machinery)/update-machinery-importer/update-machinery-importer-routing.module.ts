import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryImporterPage } from './update-machinery-importer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryImporterPageRoutingModule {}
