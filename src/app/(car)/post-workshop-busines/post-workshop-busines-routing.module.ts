import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostWorkshopBusinesPage } from './post-workshop-busines.page';

const routes: Routes = [
  {
    path: '',
    component: PostWorkshopBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostWorkshopBusinesPageRoutingModule {}
