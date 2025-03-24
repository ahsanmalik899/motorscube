import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeWorkshopPagePage } from './update-bike-workshop-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeWorkshopPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeWorkshopPagePageRoutingModule {}
