import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryDrivingSchoolSingleViewPage } from './machinery-driving-school-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryDrivingSchoolSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryDrivingSchoolSingleViewPageRoutingModule {}
