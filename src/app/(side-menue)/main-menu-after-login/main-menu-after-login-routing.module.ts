import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuAfterLoginPage } from './main-menu-after-login.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuAfterLoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuAfterLoginPageRoutingModule {}
