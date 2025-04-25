import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVehicleDrivingSchoolPage } from './update-vehicle-driving-school.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVehicleDrivingSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVehicleDrivingSchoolPageRoutingModule {}
