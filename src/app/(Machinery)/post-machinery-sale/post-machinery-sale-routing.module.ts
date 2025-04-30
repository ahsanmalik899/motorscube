import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachinerySalePage } from './post-machinery-sale.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachinerySalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachinerySalePageRoutingModule {}
