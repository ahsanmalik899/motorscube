import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryWorkshopSingleViewPage } from './machinery-workshop-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryWorkshopSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryWorkshopSingleViewPageRoutingModule {}
