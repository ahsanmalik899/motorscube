import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryYouPostedPage } from './machinery-you-posted.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryYouPostedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryYouPostedPageRoutingModule {}
