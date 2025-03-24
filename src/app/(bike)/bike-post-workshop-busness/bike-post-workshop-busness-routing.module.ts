import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikePostWorkshopBusnessPage } from './bike-post-workshop-busness.page';

const routes: Routes = [
  {
    path: '',
    component: BikePostWorkshopBusnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePostWorkshopBusnessPageRoutingModule {}
