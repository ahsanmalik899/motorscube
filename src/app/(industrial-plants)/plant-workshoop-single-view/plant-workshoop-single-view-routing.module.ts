import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantWorkshoopSingleViewPage } from './plant-workshoop-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantWorkshoopSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantWorkshoopSingleViewPageRoutingModule {}
