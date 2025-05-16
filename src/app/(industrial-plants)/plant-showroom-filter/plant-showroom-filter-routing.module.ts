import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantShowroomFilterPage } from './plant-showroom-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantShowroomFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantShowroomFilterPageRoutingModule {}
