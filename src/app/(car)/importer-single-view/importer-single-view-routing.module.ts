import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImporterSingleViewPage } from './importer-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: ImporterSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImporterSingleViewPageRoutingModule {}
