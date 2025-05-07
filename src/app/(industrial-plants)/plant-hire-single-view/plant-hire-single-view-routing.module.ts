import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantHireSingleViewPage } from './plant-hire-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantHireSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantHireSingleViewPageRoutingModule {}
