import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostShowroomBusinesPage } from './post-showroom-busines.page';

const routes: Routes = [
  {
    path: '',
    component: PostShowroomBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostShowroomBusinesPageRoutingModule {}
