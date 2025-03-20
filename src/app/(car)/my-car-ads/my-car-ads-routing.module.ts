import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCarAdsPage } from './my-car-ads.page';

const routes: Routes = [
  {
    path: '',
    component: MyCarAdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCarAdsPageRoutingModule {}
