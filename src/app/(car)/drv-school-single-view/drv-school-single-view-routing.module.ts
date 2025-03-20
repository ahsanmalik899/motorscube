import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrvSchoolSingleViewPage } from './drv-school-single-view.page';

const routes: Routes = [
  {
    path: '',
    component: DrvSchoolSingleViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrvSchoolSingleViewPageRoutingModule {}
