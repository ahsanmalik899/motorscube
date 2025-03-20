import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountProfBusinesPage } from './account-prof-busines.page';

const routes: Routes = [
  {
    path: '',
    component: AccountProfBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountProfBusinesPageRoutingModule {}
