import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryInsuranceFilterPage } from './machinery-insurance-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryInsuranceFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryInsuranceFilterPageRoutingModule {}
