import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopSingleViewPage } from './workshop-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopSingleViewPageRoutingModule {}
