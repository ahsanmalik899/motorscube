import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryInsuranceSingleViewPage } from './machinery-insurance-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryInsuranceSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryInsuranceSingleViewPageRoutingModule {}
