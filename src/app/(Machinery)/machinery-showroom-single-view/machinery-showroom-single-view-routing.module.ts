import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryShowroomSingleViewPage } from './machinery-showroom-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryShowroomSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryShowroomSingleViewPageRoutingModule {}
