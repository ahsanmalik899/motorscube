import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantSchoolPage } from './post-plant-school.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantSchoolPageRoutingModule {}
