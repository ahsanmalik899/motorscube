import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUpgradeHotspotPage } from './profile-upgrade-hotspot.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUpgradeHotspotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUpgradeHotspotPageRoutingModule {}
