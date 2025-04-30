import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryShowroomFilterPage } from './machinery-showroom-filter.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryShowroomFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryShowroomFilterPageRoutingModule {}
