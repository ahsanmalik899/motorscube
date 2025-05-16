import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlantInsurancePage } from './update-plant-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlantInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlantInsurancePageRoutingModule {}
