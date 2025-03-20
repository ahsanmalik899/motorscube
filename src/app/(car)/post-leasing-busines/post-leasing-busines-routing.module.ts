import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostLeasingBusinesPage } from './post-leasing-busines.page';

const routes: Routes = [
  {
    path: '',
    component: PostLeasingBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLeasingBusinesPageRoutingModule {}
