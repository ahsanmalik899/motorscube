import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantDealerSingleViewPage } from './plant-dealer-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantDealerSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantDealerSingleViewPageRoutingModule {}
