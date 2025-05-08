import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantBusenessPage } from './plant-buseness.page';

const routes: Routes = [
  {
    path: '',
    component: PlantBusenessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantBusenessPageRoutingModule {}
