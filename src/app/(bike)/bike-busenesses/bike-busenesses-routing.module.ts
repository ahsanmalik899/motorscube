import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeBusenessesPage } from './bike-busenesses.page';

const routes: Routes = [
  {
    path: '',
    component: BikeBusenessesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeBusenessesPageRoutingModule {}
