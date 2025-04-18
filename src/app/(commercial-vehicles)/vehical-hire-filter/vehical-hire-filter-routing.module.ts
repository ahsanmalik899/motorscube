import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicalHireFilterPage } from './vehical-hire-filter.page';

const routes: Routes = [
  {
    path: '',
    component: VehicalHireFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicalHireFilterPageRoutingModule {}
