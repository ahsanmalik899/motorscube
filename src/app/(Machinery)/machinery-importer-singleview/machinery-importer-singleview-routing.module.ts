import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryImporterSingleviewPage } from './machinery-importer-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryImporterSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryImporterSingleviewPageRoutingModule {}
