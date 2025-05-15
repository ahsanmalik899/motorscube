import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantWorkshopPage } from './post-plant-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantWorkshopPageRoutingModule {}
