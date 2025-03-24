import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostDealershipBusinessPage } from './bike-post-dealership-business.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostDealershipBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostDealershipBusinessPageRoutingModule {}
