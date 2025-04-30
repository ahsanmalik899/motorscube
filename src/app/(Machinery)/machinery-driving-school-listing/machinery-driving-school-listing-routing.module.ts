import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryDrivingSchoolListingPage } from './machinery-driving-school-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryDrivingSchoolListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryDrivingSchoolListingPageRoutingModule {}
