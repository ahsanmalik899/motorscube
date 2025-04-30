import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryWorkshopPage } from './post-machinery-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryWorkshopPageRoutingModule {}
