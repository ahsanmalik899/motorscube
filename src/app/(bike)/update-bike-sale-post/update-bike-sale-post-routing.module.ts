import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeSalePostPage } from './update-bike-sale-post.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeSalePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeSalePostPageRoutingModule {}
