import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantHirePage } from './update-plant-hire.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantHirePageRoutingModule {}
