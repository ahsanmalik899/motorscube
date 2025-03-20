import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HireSingleViewPage } from './hire-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: HireSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HireSingleViewPageRoutingModule {}
