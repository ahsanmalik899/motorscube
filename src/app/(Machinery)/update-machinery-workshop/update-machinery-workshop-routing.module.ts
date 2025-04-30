import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryWorkshopPage } from './update-machinery-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryWorkshopPageRoutingModule {}
