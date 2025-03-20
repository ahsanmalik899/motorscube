import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeHomePage } from './bike-home.page';

const routes: Routes = [
  {
    path: '',
    component: BikeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeHomePageRoutingModule {}
