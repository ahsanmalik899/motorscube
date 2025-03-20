import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccCreateBusinesPage } from './acc-create-busines.page';

const routes: Routes = [
  {
    path: '',
    component: AccCreateBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccCreateBusinesPageRoutingModule {}
