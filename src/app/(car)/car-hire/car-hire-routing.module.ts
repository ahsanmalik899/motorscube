import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarHirePage } from './car-hire.page';

const routes: Routes = [
  {
    path: '',
    component: CarHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarHirePageRoutingModule {}
