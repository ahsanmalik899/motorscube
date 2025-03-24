import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeDealershipPagePage } from './update-bike-dealership-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeDealershipPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeDealershipPagePageRoutingModule {}
