import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDrivingSchoolSingleviewPage } from './vehicle-driving-school-singleview.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDrivingSchoolSingleviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleDrivingSchoolSingleviewPageRoutingModule {}
