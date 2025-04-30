import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryHirePage } from './post-machinery-hire.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryHirePageRoutingModule {}
