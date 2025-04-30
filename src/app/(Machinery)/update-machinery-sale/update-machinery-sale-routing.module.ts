import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachinerySalePage } from './update-machinery-sale.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachinerySalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachinerySalePageRoutingModule {}
