import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryLeasingPage } from './update-machinery-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryLeasingPageRoutingModule {}
