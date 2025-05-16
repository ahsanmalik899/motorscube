import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantLeasingPage } from './update-plant-leasing.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantLeasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantLeasingPageRoutingModule {}
