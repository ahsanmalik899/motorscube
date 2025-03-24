import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBikeLeasingPagePage } from './update-bike-leasing-page.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBikeLeasingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBikeLeasingPagePageRoutingModule {}
