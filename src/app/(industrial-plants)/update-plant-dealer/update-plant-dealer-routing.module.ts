import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantDealerPage } from './update-plant-dealer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantDealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantDealerPageRoutingModule {}
