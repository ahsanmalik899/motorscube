import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeInsurancePostPage } from './update-bike-insurance-post.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeInsurancePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeInsurancePostPageRoutingModule {}
