import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryHirePage } from './update-machinery-hire.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryHirePageRoutingModule {}
