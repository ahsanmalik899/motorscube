import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeSingleViewPage } from './bike-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: BikeSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeSingleViewPageRoutingModule {}
