import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinerySaleFilterPage } from './machinery-sale-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachinerySaleFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinerySaleFilterPageRoutingModule {}
