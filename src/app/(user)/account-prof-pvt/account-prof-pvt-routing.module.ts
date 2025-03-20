import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountProfPvtPage } from './account-prof-pvt.page';

const routes: Routes = [
  {
    path: '',
    component: AccountProfPvtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountProfPvtPageRoutingModule {}
