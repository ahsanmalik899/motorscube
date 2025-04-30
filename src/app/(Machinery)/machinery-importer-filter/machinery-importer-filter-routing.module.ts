import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryImporterFilterPage } from './machinery-importer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryImporterFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryImporterFilterPageRoutingModule {}
