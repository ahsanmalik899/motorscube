import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryShowroomPage } from './post-machinery-showroom.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryShowroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryShowroomPageRoutingModule {}
