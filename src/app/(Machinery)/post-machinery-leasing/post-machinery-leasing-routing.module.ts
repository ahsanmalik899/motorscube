import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryLeasingPage } from './post-machinery-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryLeasingPageRoutingModule {}
