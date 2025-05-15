import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantLeasingPage } from './post-plant-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantLeasingPageRoutingModule {}
