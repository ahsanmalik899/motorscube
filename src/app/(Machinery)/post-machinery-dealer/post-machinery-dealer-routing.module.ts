import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryDealerPage } from './post-machinery-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryDealerPageRoutingModule {}
