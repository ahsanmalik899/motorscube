import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarHomePage } from './car-home.page';

const routes: Routes = [
  {
    path: '',
    component: CarHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarHomePageRoutingModule {}
