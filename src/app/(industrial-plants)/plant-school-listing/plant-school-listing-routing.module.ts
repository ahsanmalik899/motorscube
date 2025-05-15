import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSchoolListingPage } from './plant-school-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSchoolListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSchoolListingPageRoutingModule {}
