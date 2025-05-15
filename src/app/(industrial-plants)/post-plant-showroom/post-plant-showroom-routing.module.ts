import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantShowroomPage } from './post-plant-showroom.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantShowroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantShowroomPageRoutingModule {}
