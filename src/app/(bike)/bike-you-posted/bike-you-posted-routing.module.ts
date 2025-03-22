import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeYouPostedPage } from './bike-you-posted.page';

const routes: Routes = [
  {
    path: '',
    component: BikeYouPostedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeYouPostedPageRoutingModule {}
