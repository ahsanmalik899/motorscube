import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryExporterSingleViewPage } from './machinery-exporter-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryExporterSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryExporterSingleViewPageRoutingModule {}
