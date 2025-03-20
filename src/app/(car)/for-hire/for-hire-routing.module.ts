import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForHirePage } from './for-hire.page';

const routes: Routes = [
  {
    path: '',
    component: ForHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForHirePageRoutingModule {}
