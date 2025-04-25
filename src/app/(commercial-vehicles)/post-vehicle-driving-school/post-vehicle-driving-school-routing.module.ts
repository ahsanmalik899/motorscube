import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVehicleDrivingSchoolPage } from './post-vehicle-driving-school.page';

const routes: Routes = [
  {
    path: '',
    component: PostVehicleDrivingSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostVehicleDrivingSchoolPageRoutingModule {}
