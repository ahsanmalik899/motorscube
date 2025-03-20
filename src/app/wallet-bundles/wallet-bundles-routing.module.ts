import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletBundlesPage } from './wallet-bundles.page';

const routes: Routes = [
  {
    path: '',
    component: WalletBundlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletBundlesPageRoutingModule {}
