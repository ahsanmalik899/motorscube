import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantSchoolFilterPage } from './plant-school-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantSchoolFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantSchoolFilterPageRoutingModule {}
