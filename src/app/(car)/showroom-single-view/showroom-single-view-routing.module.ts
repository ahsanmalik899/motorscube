import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowroomSingleViewPage } from './showroom-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: ShowroomSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowroomSingleViewPageRoutingModule {}
