import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantLeasingFilterPage } from './plant-leasing-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantLeasingFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantLeasingFilterPageRoutingModule {}
