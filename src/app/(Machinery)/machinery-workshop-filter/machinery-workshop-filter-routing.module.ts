import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryWorkshopFilterPage } from './machinery-workshop-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryWorkshopFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryWorkshopFilterPageRoutingModule {}
