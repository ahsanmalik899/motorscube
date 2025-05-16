import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantDealerFilterPage } from './plant-dealer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: PlantDealerFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantDealerFilterPageRoutingModule {}
