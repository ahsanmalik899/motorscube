import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLeasingBusinesPage } from './update-leasing-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLeasingBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLeasingBusinesPageRoutingModule {}
