import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceSingleViewPage } from './insurance-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceSingleViewPageRoutingModule {}
