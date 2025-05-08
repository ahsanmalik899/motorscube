import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPlantSalePage } from './post-plant-sale.page';

const routes: Routes = [
  {
    path: '',
    component: PostPlantSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPlantSalePageRoutingModule {}
