import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantHireFilterPage } from './plant-hire-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantHireFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantHireFilterPageRoutingModule {}
