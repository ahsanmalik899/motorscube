import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantDealerPage } from './post-plant-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantDealerPageRoutingModule {}
