import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSchoolSingleViewPage } from './plant-school-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSchoolSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSchoolSingleViewPageRoutingModule {}
