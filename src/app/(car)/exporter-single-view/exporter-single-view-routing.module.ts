import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExporterSingleViewPage } from './exporter-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: ExporterSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExporterSingleViewPageRoutingModule {}
