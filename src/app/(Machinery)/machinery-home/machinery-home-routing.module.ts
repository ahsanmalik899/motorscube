import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryHomePage } from './machinery-home.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryHomePageRoutingModule {}
