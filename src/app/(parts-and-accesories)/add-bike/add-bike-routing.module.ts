import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBikePage } from './add-bike.page';

const routes: Routes = [
  {
    path: '',
    component: AddBikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBikePageRoutingModule {}
