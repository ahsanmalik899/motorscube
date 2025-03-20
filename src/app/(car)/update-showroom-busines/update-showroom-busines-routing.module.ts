import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateShowroomBusinesPage } from './update-showroom-busines.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateShowroomBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateShowroomBusinesPageRoutingModul {}
