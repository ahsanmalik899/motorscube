import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerciaVehiclesHomePage } from './commercia-vehicles-home.page';

const routes: Routes = [
  {
    path: '',
    component: CommerciaVehiclesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerciaVehiclesHomePageRoutingModule {}
