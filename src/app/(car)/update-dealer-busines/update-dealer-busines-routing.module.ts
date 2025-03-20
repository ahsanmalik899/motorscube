import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDealerBusinesPage } from './update-dealer-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDealerBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDealerBusinesPageRoutingModule {}
