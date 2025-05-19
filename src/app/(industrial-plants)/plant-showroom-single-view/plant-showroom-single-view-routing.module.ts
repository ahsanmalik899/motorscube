import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantShowroomSingleViewPage } from './plant-showroom-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantShowroomSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantShowroomSingleViewPageRoutingModule {}
