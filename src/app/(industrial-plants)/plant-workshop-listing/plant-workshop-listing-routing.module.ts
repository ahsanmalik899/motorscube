import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantWorkshopListingPage } from './plant-workshop-listing.page';

const routes: Routes = [
  {
    path: '',
    component: PlantWorkshopListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantWorkshopListingPageRoutingModule {}
