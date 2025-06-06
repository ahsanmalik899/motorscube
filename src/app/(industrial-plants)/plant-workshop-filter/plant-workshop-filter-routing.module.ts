import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantWorkshopFilterPage } from './plant-workshop-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantWorkshopFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantWorkshopFilterPageRoutingModule {}
