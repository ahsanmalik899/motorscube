import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsUpgradeSupremePage } from './ads-upgrade-supreme.page';

const routes: Routes = [
  {
    path: '',
    component: AdsUpgradeSupremePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsUpgradeSupremePageRoutingModule {}
