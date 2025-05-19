import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantLeasingSingleViewPage } from './plant-leasing-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantLeasingSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantLeasingSingleViewPageRoutingModule {}
