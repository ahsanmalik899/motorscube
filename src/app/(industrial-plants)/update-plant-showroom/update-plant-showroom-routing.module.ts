import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantShowroomPage } from './update-plant-showroom.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantShowroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantShowroomPageRoutingModule {}
