import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSchoolBusinesPage } from './update-school-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSchoolBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSchoolBusinesPageRoutingModule {}
