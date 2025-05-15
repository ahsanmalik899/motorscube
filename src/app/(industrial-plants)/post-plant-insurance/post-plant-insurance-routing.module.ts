import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantInsurancePage } from './post-plant-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantInsurancePageRoutingModule {}
