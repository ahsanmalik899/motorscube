import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryDrivingSchoolFilterPage } from './machinery-driving-school-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryDrivingSchoolFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryDrivingSchoolFilterPageRoutingModule {}
