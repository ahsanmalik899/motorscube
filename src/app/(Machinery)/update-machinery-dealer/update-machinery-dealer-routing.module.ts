import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryDealerPage } from './update-machinery-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryDealerPageRoutingModule {}
