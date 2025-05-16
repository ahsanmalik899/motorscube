import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantSchoolPage } from './update-plant-school.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantSchoolPageRoutingModule {}
