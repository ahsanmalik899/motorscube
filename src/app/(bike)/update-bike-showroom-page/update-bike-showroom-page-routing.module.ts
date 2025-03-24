import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeShowroomPagePage } from './update-bike-showroom-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeShowroomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeShowroomPagePageRoutingModule {}
