import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostShowroomBusnessesPage } from './bike-post-showroom-busnesses.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostShowroomBusnessesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostShowroomBusnessesPageRoutingModule {}
