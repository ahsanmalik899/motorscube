import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachineryDrivingSchoolPage } from './update-machinery-driving-school.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachineryDrivingSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachineryDrivingSchoolPageRoutingModule {}
