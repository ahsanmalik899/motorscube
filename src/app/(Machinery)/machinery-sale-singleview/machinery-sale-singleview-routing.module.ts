import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinerySaleSingleviewPage } from './machinery-sale-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: MachinerySaleSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinerySaleSingleviewPageRoutingModule {}
