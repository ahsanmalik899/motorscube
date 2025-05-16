import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantWorkshopPage } from './update-plant-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantWorkshopPageRoutingModule {}
