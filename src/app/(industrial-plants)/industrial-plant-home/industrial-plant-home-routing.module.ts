import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndustrialPlantHomePage } from './industrial-plant-home.page';

const routes: Routes = [
  {
    path: '',
    component: IndustrialPlantHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustrialPlantHomePageRoutingModule {}
