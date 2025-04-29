import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryHireSingleViewPage } from './machinery-hire-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryHireSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryHireSingleViewPageRoutingModule {}
