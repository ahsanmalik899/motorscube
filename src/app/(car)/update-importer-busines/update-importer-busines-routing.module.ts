import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateImporterBusinesPage } from './update-importer-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateImporterBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateImporterBusinesPageRoutingModule {}
